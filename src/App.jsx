import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginSignUp from './Component/LoginSignUp'
import Home from './Component/Home'

const App = () => {
  return (
    <div>
          <div className='text-center h3  p-2 bg-secondary text-light'>React Firebase Form</div>
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<LoginSignUp/>}/>
           <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App