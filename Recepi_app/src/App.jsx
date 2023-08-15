import React from 'react'
import Pages from './pages/Pages'
import Category from './Components/Category'
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Category/>
      <Pages/>
      </BrowserRouter>
    </div>
  )
}

export default App