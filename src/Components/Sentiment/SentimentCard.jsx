import React from 'react'
import { IoNewspaperSharp } from "react-icons/io5";
import { FcBullish } from "react-icons/fc";
function SentimentCard({}) {
  return (
    <div className='py-4 md:px-4 px-1 bg-[#E7F4FD] rounded-md shadow-md flex gap-1 w-[100%] h-[100%]'>
        <div className='md:w-[10%]'>
            <div className='bg-[#0183FB] w-[30px]  h-[30px] rounded-full flex justify-center items-center'><IoNewspaperSharp color='white'/></div>
        </div>
        <div className='w-[90%] flex flex-col gap-2'>
            <div className='text-xs font-semibold'>Lorem ipsum dolor sit amet consectetur elit. Omnis consectetur eum velit iusto,  iste nisi assumenda.</div>
            <div className=' text-xs  text-gray-600 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quod veritatis sint quasi, accusantium, ut adipisci voluptatibus voluptate delectus
                 incidunt similique ipsam dolores obcaecati pariatur porro ducimus perferendis, quam doloribus!</div>
        </div>
    </div>
  )
}

export default SentimentCard