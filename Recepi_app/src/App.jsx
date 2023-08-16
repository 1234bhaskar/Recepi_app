import React from 'react'
import Pages from './pages/Pages'
import Category from './Components/Category'
import { BrowserRouter } from 'react-router-dom'
import Search from './Components/Search'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Search/>
      <Category/>
      <Pages/>
      </BrowserRouter>
    </div>
  )
}

export default App