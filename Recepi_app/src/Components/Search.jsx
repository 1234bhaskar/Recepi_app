import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom';


function Search() {
    const navigate=useNavigate();
    const [input,setInput]=useState("");
     function submitHandler(e) {
        e.preventDefault();
        navigate("/searched/"+input);
    }
  return (
    <SearchBar >
        <form action="" onSubmit={submitHandler}>
            <div>
            <FaSearch/>
            </div>
            <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} />
        </form>
    </SearchBar>
  )
}

const SearchBar =styled.div`
width:100%;
display:flex;
justify-content:center;

form{
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:30vw;
    border-radius:10px;
    background:#454545;
    margin:5px 0px;
    padding:3px;
           

    
    div{
        display:flex;
        justify-content:center;
        width:10%;
        color:white;
    }
}
FaSearch{
    height:100vh;
    color:white;

}
input{
    border:0;
    width:90%;
    height:7vh;
    color:#F8DE22;
    background:#454545;
    outline:none;
    font-size:25px;
}  

`
export default Search