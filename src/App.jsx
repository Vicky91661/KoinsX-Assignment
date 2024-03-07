import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Crypto from './Pages/Crypto'
import Navbar from './Components/Navbar'
import { dataState } from './State/Atom'
import { useRecoilState } from 'recoil'
import axios from 'axios'

function App() {
  const [text, setText] = useRecoilState(dataState);
  useEffect(()=>{
    axios.get("https://api.coingecko.com/api/v3//search/trending").then((response)=>{
      console.log(response.data.coins)

      // Sort the coins based on the profit percentage it gain in last 24 hour in decreasing order

      response.data.coins.sort(function(a,b){
           let x = a.item.data.price_change_percentage_24h.btc;
           let y = b.item.data.price_change_percentage_24h.btc;
           if(x<y){return 1;} 
           if(x>y){return -1;}
           return 0;
         });
         console.log("Sorted data ",)
      setText(response.data.coins)
    }).catch((error)=>{
      console.log(error)
    })
  },[])

  
  console.log("data inside =>",text)

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="" element={<Crypto/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
