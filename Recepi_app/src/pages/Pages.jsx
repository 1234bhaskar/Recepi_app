import React from 'react'
import Home from './Home'
import {Routes,Route} from 'react-router-dom'
import Cuisine from './Cuisine'
import { Searched } from './Searched'

function Pages() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cuisine/:id' element={<Cuisine/>} />
      <Route path='/searched/:search' element={<Searched/>} />

      </Routes>
    </div>
  )
}

export default Pages