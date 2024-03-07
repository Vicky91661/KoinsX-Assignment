import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
function CalculateCard2() {
  return (
    <div className='bg-gradient-to-br from-[#f89561] from-0%  via-[#f89561] via-25% to-[#fa4744] to-100% flex gap-10 py-2 px-4 rounded-md my-2'>
        <div className='w-[30%] rounded-md'>
            <img className='rounded-md object-cover  h-[100%]' src="https://images.unsplash.com/photo-1634704784915-aacf363b021f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='w-[60%] flex flex-col gap-2 space-x-1 py-2'>
            <div className=' font-medium text-white text-lg tracking-[.01em]'>Calculate your tax<br />libarity</div>
            <div><button className='bg-white px-4 py-1 rounded-md font-semibold'>Check Now <FaArrowRightLong className=' inline-block ml-2'/> </button></div>
        </div>
    </div>
  )
}

export default CalculateCard2