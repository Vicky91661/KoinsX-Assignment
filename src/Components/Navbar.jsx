import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
function Navbar() {

  const [toggle,setToggle]= useState(false)

  return (
    <div className='bg-white font-Inter text-sm md:text-base shadow-black shadow-2xl select-none md:py-1'>
      <div className=' md:flex md:justify-between items-center w-[92%] mx-auto  '>
        <div className='md:w-[40%]  flex  justify-between items-center'>
            <div className='flex'>
                <img className=' w-16' src={"https://www.koinx.com/_next/static/media/Logo.99e6a1dc.svg"} alt="Koinx" />
                <p className='text-[8px] md:text-[10px]'>TM</p>
            </div>
           
            <div className='md:hidden w-5 font-bold'>
              {
                toggle?< RxCross2 className='w-5 h-5 ' onClick={()=>setToggle((prev)=>!prev)}/>:<FiMenu className='w-5 h-5 ' onClick={()=>setToggle((prev)=>!prev)}/>
              }
                
            </div>
        </div>
        <div className='md:static w-full flex justify-center md:justify-end font-medium'>
          <div className={`flex flex-col items-center gap-5 md:flex md:flex-row py-6 md:py-0 md:w-[70%] md:justify-end md:gap-10 ${toggle?"":"hidden"}`}>
            <div><Link to="" className=' hover:text-gray-500'>Crypto Taxes</Link></div>
            <div><Link to="" className=' hover:text-gray-500'>Free Tools</Link></div>
            <div><Link to="" className=' hover:text-gray-500'>Resource Center</Link></div>
            <div><button className='bg-gradient-to-r from-nav-button-start-color to-nav-button-end-color text-white px-[10px] py-[3px] rounded-md font-normal'>Get Started</button></div>
          </div>
        </div>
       

      </div>
      
    </div>
    
  )
}

export default Navbar
