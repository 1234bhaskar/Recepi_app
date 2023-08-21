import React from 'react'
import {FaPizzaSlice ,FaHamburger} from 'react-icons/fa'
import {GiNoodles ,GiChopsticks} from 'react-icons/gi'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom';
function Category() {
  return (
    <List>
        <SLink to='/cuisine/italian'>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
        <SLink to='/cuisine/american'>
            <FaHamburger/>
            <h4>American</h4>
        </SLink>
        <SLink to='/cuisine/thai'>
            <GiNoodles/>
            <h4>Thai</h4>
        </SLink >
        <SLink to='/cuisine/chinese'>
            <GiChopsticks/>
            <h4>Chinese</h4>
        </SLink>
    </List>
  )
}
const List =styled.div`
display:flex;
justify-content:center;
margin:40px 0px;

`
const SLink=styled(NavLink)`
    padding:20px 30px;
    background:#FFC436;
    border-radius:10%;
    margin:0 20px;
    display:flex;
    flex-direction:column;
    align-items:center; 
    text-decoration:none;
    color:black;
    
    
    h4{
         color:white;
         
    }

`
;
export default Category