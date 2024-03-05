import React from 'react'
import Bigchart from '../Components/BigChart/Bigchart'
import RightCard from '../Components/RightCard'
import TredingCoin from '../Components/smallCard/TredingCoin'
function Crypto() {
  return (
    <div className=' bg-[#EEF2F5] w-[100%] h-screen md:px-[72px] px-3 flex flex-col md:flex-row md:justify-between font-Inter select-none'>
      
      <div className='left md:w-[69%]'>
        <div className=' h-9 pt-[5px]'><h1 className=' text-sm text-gray-400 font-medium'>Cryptocurrencies {'>>'} <span className='text-black'>Bitcoin</span></h1></div>
        <div className='big chart'>
          <Bigchart/>
        </div>
        <div className='Performance '>

        </div>
        <div className='Sentiment'>

        </div>
        <div className='AboutBitcoin'>

        </div>
        <div>

        </div>
        <div className='Team'>

        </div>
      </div>
      <div  className='right md:w-[29%]'>
        <div>
          <RightCard/>
        </div>
        <div>
          <TredingCoin/>
        </div>
      </div>
    </div>
  )
}

export default Crypto