import React from 'react'
import Bigchart from '../Components/BigChart/Bigchart'
import RightCard from '../Components/RightCard'
import TredingCoin from '../Components/smallCard/TredingCoin'
import Performance from '../Components/Performance'
import About from '../Components/About/About'
import Team from '../Components/Teams/Team'
import Tokenomics from '../Components/Tokenomics/Tokenomics'
import Sentiment from '../Components/Sentiment/Sentiment'
import LikeCoin from '../Components/LikeCoin/LikeCoin'

function Crypto() {
  return (
    <div className=' bg-[#EEF2F5] w-[100%] flex flex-col md:flex-row md:justify-between font-Inter select-none md:px-[72px] px-3 relative'>
      
      <div className='left md:w-[69%] flex flex-col gap-4 '>
        <div className=' h-5 pt-[5px]'><h1 className=' text-sm text-gray-400 font-medium'>Cryptocurrencies {'>>'} <span className='text-black'>Bitcoin</span></h1></div>
        <div className='big chart '>
          <Bigchart/>
        </div>
        <div className='Performance'>
          <Performance/>
        </div>
        <div className='Sentiment'>
          <Sentiment/>
        </div>
        <div className='AboutBitcoin-3'>
          <About/>
        </div>
        <div className='Tokenomics '>
          <Tokenomics/>
        </div  >
        <div className='Team md:pb-5'>
            <Team/>
        </div>
        <div className=' LikeCoin static bg-white md:absolute md:-bottom-[440px] px-0 rounded-md md:rounded-none'>
            <LikeCoin/>
        </div>
      </div>
      <div  className='right md:w-[29%] h-screen'>
        <div  className='RightCard'>
          <RightCard/>
        </div>
        <div  className='TredingCoin'>
          <TredingCoin/>
        </div>
      </div>
    </div>
  )
}

export default Crypto