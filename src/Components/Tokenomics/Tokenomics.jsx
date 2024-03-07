import React from 'react'
import './style.css'
function Tokenomics() {
  return (
    <div className='p-4 px-6 bg-white rounded-md shadow-md flex flex-col gap-4 pb-12'>
        <div className=' text-xl font-bold'>Tokenomics</div>
        <div className='text-lg font-semibold'>Initial Distribution</div>
        <div className='flex items-center gap-10'>
            <div className="outerRing flex justify-center items-center">
                <div className='innerRing'></div>
            </div>
            <div>
                <div className='relative text-sm font-medium'> <div className='w-[8px] h-[8px] bg-[#0680FE] absolute top-[6px] rounded-full -left-4'></div> Crowdsale investors: 80%</div>
                <div className='relative text-sm font-medium'> <div className='w-[8px] h-[8px] bg-[#F6A200] absolute top-[6px] rounded-full -left-4'></div>Foundation: 20%</div>
        
            </div>
        </div>
        
        <div className=' font-medium text-sm'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, quia unde sapiente consequatur fugiat quisquam 
                eaque saepe ratione corporis fugit esse libero animi in similique soluta ea consequuntur tenetur aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque porro a, assumenda laborum et id saepe earum odit rem numquam animi, 
                rerum architecto enim iusto reprehenderit, temporibus aperiam debitis obcaecati? , consectetur adipisicing elit. Distinctio, quia unde sapiente consequatur fugiat quisquam 
                eaque saepe ratione corporis fugit esse libero animi in similique soluta ea consequuntur tenetur aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque porro a, assumenda laborum et id saepe earum odit rem numquam animi, 
                rerum architecto enim iusto reprehenderit.</p>
        </div>
    </div>
  )
}

export default Tokenomics