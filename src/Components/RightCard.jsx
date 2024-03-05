import React from 'react'
import img from "../assets/img.png"
function RightCard() {
  return (
    <div className=' bg-gradient-to-tr from-[#0053fe] to-[#0053ff] text-white text-center p-8 md:pb-11 md:mt-9 mt-5 rounded-md shadow-lg flex flex-col gap-4'>
        <div className=' text-xl font-semibold'>
            Get Startd with KoinX <br /> for FREE
        </div>
        <div className=' text-sm '>
            With our range features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
        </div>
        <div className='flex justify-center'>
            <img className='w-52 h-48' src={img} alt="" />
        </div>
        <div>
            <button className='bg-white text-black rounded-md px-5 font-semibold py-[5px]' >Get Started for FREE </button>
        </div>
    </div>
  )
}

export default RightCard