import React from 'react'
import Pages from './pages/Pages'
import Category from './Components/Category'
import { BrowserRouter, Link } from 'react-router-dom'
import Search from './Components/Search'
import { styled } from 'styled-components'
import Home from './pages/Home'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Link to={"/"}>
      <Nav>
          <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ZASp4ONmQhGeIbrflI8W1GSxJmuHjmt-lA&usqp=CAU'} alt="image" />
      </Nav>
      </Link>
      <Search/>
      <Category/>
      <Pages/>
      </BrowserRouter>
    </div>
  )
}

export default App
const Nav=styled.div`
position:relative;
img{
  height:80px;
  position:absolute;
  top-0;
  left-10;
}

`