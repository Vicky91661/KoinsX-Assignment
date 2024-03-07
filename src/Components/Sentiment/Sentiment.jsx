import React from 'react'
import SentimentCard from './SentimentCard'
import SentimentCard2 from './SentimentCard2'
import { FaAngleRight } from "react-icons/fa6";
import { RiErrorWarningFill } from "react-icons/ri";
function Sentiment() {
  return (
    <div className='p-4 px-6 bg-white rounded-md shadow-md flex flex-col gap-4 pb-12 '>
        <div className=' text-xl font-bold'>Sentiment</div>
        <div className='text-lg font-semibold'>Key Events <RiErrorWarningFill className=' inline-block' color='gray'/></div>
        <div className='flex items-center  w-[100%] md:gap-10 gap-2 relative'>
            <div className='bg-white w-[32px] h-[32px] rounded-full flex items-center justify-center absolute right-1'><FaAngleRight color='gray'/></div>
             <SentimentCard className='bg-red-500 h-[152px] w-[50%]'/>
            <SentimentCard2 className='bg-red-500 h-[152px] w-[50%]'/>
        </div>
        <div className='text-lg font-semibold mt-2'>Analyst Estimates <RiErrorWarningFill className=' inline-block' color='gray'/></div>
        <div className='flex gap-5 md:gap-10'>
            <div className=' bg-[#EAF9F4] text-[#22B684] w-28 h-28 rounded-full flex items-center justify-center text-3xl font-semibold'> 76%</div>
            <div className='flex flex-col justify-center gap-3 '>
                <div className='flex items-center gap-5'>
                    <div className=' text-sm text-gray-500 font-medium '>Buy</div>
                    <div className='bg-[#00B487] w-[260px] md:w-[340px] h-2 rounded-md'></div>
                    <div className=' text-sm  text-gray-500 font-medium '>76%</div>
                </div>
                <div className='flex items-center gap-3'>
                    <div  className=' text-sm text-gray-500 font-medium '>Hold</div>
                    <div className='bg-[#C6C8CB] w-[27px] md:w-[36px] h-2 rounded-md'></div>
                    <div  className=' text-sm text-gray-500 font-medium '>8%</div>
                </div>
                <div className='flex items-center gap-5'>
                    <div  className=' text-sm text-gray-500 font-medium '>Sell</div>
                    <div className='bg-[#F4324E] w-[54px] md:w-[72px] h-2 rounded-md'></div>
                    <div  className=' text-sm text-gray-500 font-medium '>16%</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sentiment