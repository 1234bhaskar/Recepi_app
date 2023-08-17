import React from 'react'
import Home from './Home'
import {Routes,Route} from 'react-router-dom'
import Cuisine from './Cuisine'
import { Searched } from './Searched'
import { Recepi } from './Recepi'

function Pages() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cuisine/:id' element={<Cuisine/>} />
      <Route path='/searched/:search' element={<Searched/>} />
      <Route path='/recepi/:name' element={<Recepi/>} />
      </Routes>
    </div>
  )
}

export default Pages