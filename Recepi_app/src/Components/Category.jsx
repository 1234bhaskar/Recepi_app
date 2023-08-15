import React from 'react'
import {FaPizzaSlice ,FaHamburger} from 'react-icons/fa'
import {GiNoodles ,GiChopsticks} from 'react-icons/gi'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'
function Category() {
  return (
    <List>
        <NavLink to='/cuisine/italian'>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </NavLink>
        <NavLink to='/cuisine/american'>
            <FaHamburger/>
            <h4>American</h4>
        </NavLink>
        <NavLink to='/cuisine/thai'>
            <GiNoodles/>
            <h4>Thai</h4>
        </NavLink >
        <NavLink to='/cuisine/chinese'>
            <GiChopsticks/>
            <h4>Chinese</h4>
        </NavLink>
    </List>
  )
}
const List =styled.div`
display:flex;
justify-content:center;
NavLink{
    padding:10px;
    background:gray;
    border-radius:50%;
    margin:0 20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    h4{
         color:white;
    }
}
`
;
export default Category