import React from 'react'
import Bigchart from '../Components/BigChart/Bigchart'
import RightCard from '../Components/RightCard'
import TredingCoin from '../Components/smallCard/TredingCoin'
import Performance from '../Components/Performance'
import About from '../Components/About/About'
import Team from '../Components/Teams/Team'
import Tokenomics from '../Components/Tokenomics/Tokenomics'
import Sentiment from '../Components/Sentiment/Sentiment'
function Crypto() {
  return (
    <div className=' bg-[#EEF2F5] w-[100%] md:px-[72px] px-3 flex flex-col md:flex-row md:justify-between font-Inter select-none'>
      
      <div className='left md:w-[69%] flex flex-col gap-4 '>
        <div className=' h-5 pt-[5px]'><h1 className=' text-sm text-gray-400 font-medium'>Cryptocurrencies {'>>'} <span className='text-black'>Bitcoin</span></h1></div>
        <div className='big chart'>
          <Bigchart/>
        </div>
        <div className='Performance '>
          <Performance/>
        </div>
        <div className='Sentiment'>
          <Sentiment/>
        </div>
        <div className='AboutBitcoin'>
          <About/>
        </div>
        <div>
          <Tokenomics/>
        </div>
        <div className='Team'>
            <Team/>
        </div>
      </div>
      <div  className='right md:w-[29%] h-screen'>
        <div>
          <RightCard/>
        </div>
        <div>
          {/* <TredingCoin/> */}
        </div>
      </div>
    </div>
  )
}

export default Crypto