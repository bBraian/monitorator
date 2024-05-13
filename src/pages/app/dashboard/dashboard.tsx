import { Helmet } from 'react-helmet-async'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <div className='w-full flex items-center flex-col gap-4'>
            <h1 className="text-3xl font-semibold tracking-tight">Todos os serviços <span className="text-green-500">online</span></h1>
            <div className='bg-zinc-100 dark:bg-zinc-800 py-3 px-4 rounded-full'>
                <span className='text-sm tracking-tight'>Última atualização: <span className='font-semibold'>18 Out</span> as <span className='font-semibold'>17:36</span></span>
            </div>
        </div>

        <div className="flex flex-col w-full pt-6">
            <div className="flex w-full justify-between pb-5">
                <h2>Services</h2>
                <div className="flex gap-2">
                    <div>Day</div>
                    <div>Week</div>
                    <div>Month</div>
                </div>
            </div>
            <div className='bg-zinc-100 dark:bg-zinc-800 p-8 rounded-2xl'>
                <div>asd</div>
                <div>asd</div>
                <div>asd</div>
            </div>
        </div>
      </div>
    </>
  )
}
