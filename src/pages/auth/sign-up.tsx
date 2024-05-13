import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'

const signUpForm = z.object({
  managerName: z.string().min(3),
  password: z.string().min(4),
  repeatPassword: z.string().min(4),
  email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpForm)
  })

  async function handleSignUp(data: SignUpForm) {
    try {
      console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Restaurante cadastrado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate('/sign-in'),
        },
      })
    } catch (error) {
      toast.error('Erro ao cadastrar restaurante')
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant="secondary" asChild className="absolute right-8 top-8">
          <Link to="/sign-in">Fazer login</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Crie sua conta e começe a monitorar seus serviços!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input
                id="managerName"
                type="text"
                {...register('managerName')}
              />
              {errors.managerName && (
                <p className="text-sm text-red-500">
                  {errors.managerName.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
              {errors.email && (
                <p className="text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" {...register('password')} />
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="repeat-password">Repita a senha</Label>
              <Input id="repeat-password" type="password" {...register('repeatPassword')} />
              {errors.repeatPassword && (
                <p className="text-sm text-red-500">
                  {errors.repeatPassword.message}
                </p>
              )}
            </div>

            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Finalizar cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{' '}
              <a href="" className="underline underline-offset-4">
                termos de serviços
              </a>{' '}
              e{' '}
              <a href="" className="underline underline-offset-4">
                políticas de privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
