import React from 'react'
import { IoTriangle } from "react-icons/io5";
import { useRecoilValue } from 'recoil';
import { dataState } from '../../State/Atom';

function TredingCoin() {
    const coins = useRecoilValue(dataState)
    // for(key in items.item.data.price_change_percentage_24h){

    // }
  return (
    <div className='bg-white mt-5 p-4 rounded-md shadow-md flex flex-col gap-3 md:py-6 md:pb-7'>
       <div className=' text-xl font-bold'>Trending Coins (24h)</div>
        

        {coins.slice(0,3).map((items,index)=>{
            return (<div className=' flex justify-between font-semibold gap-2'>
            <div className=' flex justify-center items-center gap-1'>
                <div className='flex w-[20px] h-[20px] items-center justify-center'><img className='rounded-full' src={items.item.thumb} alt="" /></div>
                <div>{items.item.name}({items.item.symbol})</div>
            </div>
            <div className=' text-sm text-[#18AB79] bg-[#EAF7F3] px-3 py-[6px] rounded-md'>
            <IoTriangle className=' inline-block mr-2' color='#18AB79'/>
            {items.item.data.price_change_percentage_24h.btc.toFixed(2)}
            
            </div>
        </div>);
        })}
    
    </div>
  )
}

export default TredingCoin