import React from 'react'
import { IoTriangle } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
function StockCard({symbol,photo,price,percentage,map}) {
  return (
    <div className=' rounded-md shadow p-2 border-solid border-[1px] border-gray-200 relative'>
        <div className='flex gap-2 justify-center items-center'>
            <div className='flex w-[20px] h-[20px] items-center justify-center'><img className='rounded-full' 
            src={photo} alt="" /></div>
            <div className='text-xs font-medium'>{symbol}</div>
            <div className=' text-xs text-[#18AB79] bg-[#EAF7F3]  py-[4px] rounded-md w-[100px] flex items-center justify-center'>
            <IoTriangle className=' inline-block mr-[2px]' size="8px" color='#18AB79'/>
                +{percentage}%
            </div>
        </div>
        <div className=' flex flex-col'>
            <div className=' text-sm font-semibold ml-2 mt-1'>${price}</div>
            <div>
                <img src={map} alt="" />
            </div>
                
        </div>
    </div>
  )
}

export default StockCard