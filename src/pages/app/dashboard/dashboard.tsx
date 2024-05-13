import { getServiceStatus } from '@/@fakeDB/servicesStatus'
import { Helmet } from 'react-helmet-async'
import { CircleCheck } from 'lucide-react'
import { useState } from 'react'

const servicesStatus = getServiceStatus()
console.log(servicesStatus)

const colorsStatus: any = {
  1: "bg-green-500",
  2: "bg-red-500",
  3: "bg-orange-500",
}

const timeIntervals = [
  {id: "day", name: "Dia" },
  {id: "week", name: "Semana" },
  {id: "month", name: "Mês" },
]

export function Dashboard() {
  const [intervalTimeShowing, setIntervalTimeShowing] = useState("day")
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4 pb-12">
        <div className='w-full flex items-center flex-col gap-4'>
            <h1 className="text-3xl font-semibold tracking-tight">Todos os serviços <span className="text-green-500">online</span></h1>
            <div className='bg-zinc-100 dark:bg-zinc-800 py-1.5 px-3 rounded-full'>
                <span className='text-sm tracking-tight'>Última atualização: <span className='font-semibold'>18 Out</span> as <span className='font-semibold'>17:36</span></span>
            </div>
        </div>

        <div className="flex flex-col w-full pt-6">
            <div className="flex w-full justify-between pb-5 font-semibold text-lg">
                <h2 className='text-muted-foreground'>Serviços</h2>
                <div className="flex gap-2">
                  {timeIntervals.map(filter => (
                    <div data-active={intervalTimeShowing == filter.id} onClick={() => setIntervalTimeShowing(filter.id)} className='text-muted-foreground hover:text-foreground data-[active=true]:text-foreground cursor-pointer'>{filter.name}</div>
                  ))}
                </div>
            </div>
            <div className='bg-zinc-100 dark:bg-zinc-800 p-8 rounded-2xl'>

              <div className='first:pt-0 last:pb-0 py-10 last:border-b-0 border-b-2 dark:border-muted-foreground border-gray-300'>
                <div className='flex justify-between pb-2'>
                  <div className='flex gap-2'>
                    <CircleCheck color="#2fc700"/> 
                    <h2 className='font-semibold'>Service1</h2>
                  </div>
                  <div className='text-lime-600 font-semibold'>99.99%</div>
                </div>
                <ul className='flex w-full dark:bg-zinc-800 border-2 dark:border-zinc-600 border-white bg-white h-16 p-2 rounded-xl'>
                  {servicesStatus.map((stats) => (
                    <li 
                      key={stats.id} 
                      className={`flex ${colorsStatus[stats.status]} border-x-2 dark:border-x-zinc-800 border-x-white h-full w-full first:rounded-l-lg first:border-l-0 last:rounded-r-lg last:border-r-0`}
                    />
                  ))}
                </ul>
                <div className='flex justify-between pt-2'>
                  <div className='text-sm text-muted-foreground tracking-tigh'>Hà 60 dias </div>
                  <div className='text-sm text-muted-foreground tracking-tigh'>Hoje</div>
                </div>
              </div>

              <div className='first:pt-0 last:pb-0 py-10 last:border-b-0 border-b-2 dark:border-muted-foreground border-gray-300'>
                <div className='flex justify-between pb-2'>
                  <div className='flex gap-2'>
                    <CircleCheck color="#2fc700"/> 
                    <h2 className='font-semibold'>Service1</h2>
                  </div>
                  <div className='text-lime-600 font-semibold'>99.99%</div>
                </div>
                <ul className='flex w-full dark:bg-zinc-800 border-2 dark:border-zinc-600 border-white bg-white h-16 p-2 rounded-xl'>
                  {servicesStatus.map((stats) => (
                    <li 
                      key={stats.id} 
                      className={`flex ${colorsStatus[stats.status]} border-x-2 dark:border-x-zinc-800 border-x-white h-full w-full first:rounded-l-lg first:border-l-0 last:rounded-r-lg last:border-r-0`}
                    />
                  ))}
                </ul>
                <div className='flex justify-between pt-2'>
                  <div className='text-sm text-muted-foreground'>Hà 60 dias </div>
                  <div className='text-sm text-muted-foreground'>Hoje</div>
                </div>
              </div>
              <div className='first:pt-0 last:pb-0 py-10 last:border-b-0 border-b-2 dark:border-muted-foreground border-gray-300'>
                <div className='flex justify-between pb-2'>
                  <div className='flex gap-2'>
                    <CircleCheck color="#2fc700"/> 
                    <h2 className='font-semibold'>Service1</h2>
                  </div>
                  <div className='text-lime-600 font-semibold'>99.99%</div>
                </div>
                <ul className='flex w-full dark:bg-zinc-800 border-2 dark:border-zinc-600 border-white bg-white h-16 p-2 rounded-xl'>
                  {servicesStatus.map((stats) => (
                    <li 
                      key={stats.id} 
                      className={`flex ${colorsStatus[stats.status]} border-x-2 dark:border-x-zinc-800 border-x-white h-full w-full first:rounded-l-lg first:border-l-0 last:rounded-r-lg last:border-r-0`}
                    />
                  ))}
                </ul>
                <div className='flex justify-between pt-2'>
                  <div className='text-sm text-muted-foreground'>Hà 60 dias </div>
                  <div className='text-sm text-muted-foreground'>Hoje</div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}
