import { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Crypto from './Pages/Crypto'
import Navbar from './Components/Navbar'
function App() {

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
