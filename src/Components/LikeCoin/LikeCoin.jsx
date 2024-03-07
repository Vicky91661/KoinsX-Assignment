import React from 'react'
import { useRecoilValue } from 'recoil';
import { dataState } from '../../State/Atom';
import StockCard from './StockCard';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
function LikeCoin() {

    const coins = useRecoilValue(dataState)
  return (
    <div className='flex flex-col p-10 gap-2 relative rounded-md shadow-md md:rounded-none md:shadow-none md:py-14 md:px-12'>
        <div className=' w-[24px] h-[24px] bg-white rounded-full flex justify-center items-center absolute top-[32%] right-7 z-10 border-solid border-[1px] border-gray-200'>
             <IoIosArrowForward color='gray' /></div>
        <div className=' w-[24px] h-[24px] bg-white rounded-full flex justify-center items-center absolute top-[32%] left-7 z-10 border-solid border-[1px] border-gray-200 '> 
            <IoIosArrowBack color='gray' />
        </div>

        <div className=' w-[24px] h-[24px] bg-white rounded-full flex justify-center items-center absolute top-[73%] right-7 z-10 border-solid border-[1px] border-gray-200'>
             <IoIosArrowForward color='gray' /></div>
        <div className=' w-[24px] h-[24px] bg-white rounded-full flex justify-center items-center absolute top-[73%] left-7 z-10 border-solid border-[1px] border-gray-200 '> 
            <IoIosArrowBack color='gray' />
        </div>
        <div className=' text-lg font-bold mt-1'>You May Also Like</div>
        <div className=' flex gap-2 overflow-scroll md:overflow-visible'>
            {coins.slice(0,8).map((coin,index)=>{
                // console.log(coin.item.symbol)
                // console.log(coin.item.data.price_change_percentage_24h.btc.toFixed(2))
                // console.log(coin.item.thumb) symbol,photo,price,percentage
                // console.log(parseFloat(coin.item.data.price.split("$")[1]).toFixed(2))
                return <div  key={index}><StockCard symbol={coin.item.symbol} photo={coin.item.thumb} 
                price={parseFloat(coin.item.data.price.split("$")[1]).toFixed(2)}
                percentage={coin.item.data.price_change_percentage_24h.btc.toFixed(2)}
                map={coin.item.data.sparkline}
                /></div>
            })}
        </div>
        <div className=' text-lg font-bold'>Trending Coins</div>
        <div className=' flex gap-2 overflow-scroll md:overflow-visible'>
            {coins.slice(0,8).map((coin,index)=>{
                // console.log(coin.item.symbol)
                // console.log(coin.item.data.price_change_percentage_24h.btc.toFixed(2))
                // console.log(coin.item.thumb) symbol,photo,price,percentage
                // console.log(parseFloat(coin.item.data.price.split("$")[1]).toFixed(2))
                return <div  key={index}><StockCard symbol={coin.item.symbol} photo={coin.item.thumb} 
                price={parseFloat(coin.item.data.price.split("$")[1]).toFixed(2)}
                percentage={coin.item.data.price_change_percentage_24h.btc.toFixed(2)}
                map={coin.item.data.sparkline}
                /></div>
            })}
        </div>
    </div>
  )
}

export default LikeCoin