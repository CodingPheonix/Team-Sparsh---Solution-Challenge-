import React, { JSX } from 'react'

const page = (): JSX.Element => {
  return (
    <div className='h-[calc(100vh-4rem)] w-full flex flex-col gap-4 items-center justify-center'>
      <div className='flex w-full justify-around items-center'>
        <div className='w-[45%] h-[25vh] flex justify-center items-center border shadow-md rounded-2xl'>WEATHER</div>
        <div className='w-[45%] h-[25vh] flex justify-center items-center border shadow-md rounded-2xl'>SOIL</div>
      </div>
      <div className='w-[90%] min-h-[25vh] flex justify-center items-center border shadow-md rounded-2xl'>ANALYSIS AND RESULT</div>
    </div>
  )
}

export default page
