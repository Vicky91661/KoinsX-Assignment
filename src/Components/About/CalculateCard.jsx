import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


function CalculateCard() {
  return (
        <div className='bg-gradient-to-br from-cyan-500 from-0%  via-cyan-500 via-25% to-blue-500 to-100% flex gap-10 py-2 px-4 my-2 rounded-md'>
            <div className='w-[30%] rounded-md'>
                <img className='rounded-md object-cover  h-[100%]' src="https://images.unsplash.com/photo-1620266757065-5814239881fd?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className='w-[60%] flex flex-col gap-2 space-x-1 py-2'>
                <div className='  font-medium text-white text-lg tracking-[.01em]'>Calculate your <br />Profit</div>
                <div><button className='bg-white px-4 py-1 rounded-md font-semibold'>Check Now <FaArrowRightLong className=' inline-block ml-2'/> </button></div>
            </div>
        </div>
    
    
    
  )
}
// bg-gradient-to-t bg-gradient-to-tr bg-gradient-to-r bg-gradient-to-br bg-gradient-to-b bg-gradient-to-bl bg-gradient-to-l bg-gradient-to-tl
export default CalculateCard