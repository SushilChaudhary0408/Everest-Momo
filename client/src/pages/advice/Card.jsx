import React from 'react'

export default function Card({ data }) {


  return (
    <div className='font-medium w-full rounded-xl border-customGreen border-4 bg-white p-[2%] md:p-[10%]'>
      <p className='text-xl md:text-3xl'>{data.tilte}</p>
      <div className='mt-3 w-[100%]'>
        {
          data.list.map(item => <div className='flex items-center gap-2 border-b-2 border-[#EBEDF0] pb-1.5 w-full'>
            <p className='h-[10px] w-[10px] rounded-full border-2 border-coustemOrange'></p>
            <p className='text-[12px] md:text-[16px]'>{item}</p>
          </div>)
        }
      </div>

    </div>
  )
}