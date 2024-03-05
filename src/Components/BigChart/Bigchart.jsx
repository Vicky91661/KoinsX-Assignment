import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Chart from './Chart'
import { FaBitcoin } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
function Bigchart({}) {

    const [data,setData]=useState({})
    const [error,setError] =useState("")

    // useEffect(()=>{
    //     axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd')
    //     .then(function (response) {
    //         console.log(response.data.bitcoin)
    //         setData(response.data.bitcoin)
    //     })
    //     .catch(function (error) {
    //         setError(error)
    //         console.log(error);
    //     });
    // },[])
  return (
    <div className='p-2 md:p-4 rounded-lg shadow-xl bg-white '>
        <div className='w-[100%] h-34 flex flex-col'>
            <div className='flex gap-2 items-center '>
                <div><FaBitcoin  color="#F19410" fontSize="1.7em"/></div>
                <div className=' font-bold text-lg'>Bitcoin</div>
                <div className=' text-gray-400 text-sm font-semibold mb-[2px]'>BTC</div>
                <div className='bg-[#778397] rounded-md px-[7px] py-[5px] text-white text-sm ml-5'>Rank #1</div>
            </div>
            

            <div className='mt-5'>
                <div className='flex gap-3'>
                    {data && data.usd &&
                        <div  className=' text-xl font-bold'>
                        <h1>${Math.floor((data.usd)/1000)},{Math.floor((data.usd)%1000)}.00</h1>
                        </div>
                    }
                    <div className='flex items-center bg-[#EBFFF8] px-[10px] text-[#1DB07F] font-medium gap-1 rounded-md ml-6'>
                        <div>
                            <IoTriangle  color="#1DB07F" fontSize="0.8em"/>
                        </div>
                        <div>
                            2.51
                        </div>
                    </div>
                    <div className=' text-sm text-gray-500'>
                        (24H)
                    </div>
                </div>
            </div>
            {data && data.usd &&
                <div  className=' text-sm font-semibold mb-4'>
                <h1> ₹{Math.floor((data.inr)/100000)},{Math.floor(((data.inr)%100000)/1000)},{Math.floor((((data.inr)%100000))%1000)}.00</h1>
                </div>            }
            
                   </div>
        <div className='w-[100%] h-[370px] md:h-[550px]'>
            <Chart/>
        </div>
    </div>
  )
}

export default Bigchart