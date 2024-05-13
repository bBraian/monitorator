import { Helmet } from 'react-helmet-async'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <div className='w-full flex justify-center'>
            <h1 className="text-3xl font-semibold tracking-tight">Todos os serviços estão <span className="text-green-500">online</span></h1>
        </div>

        <div className="grid grid-cols-4 gap-4">    
          adadas
        </div>

        <div className="grid grid-cols-9 gap-4">
            oi
        </div>
      </div>
    </>
  )
}
