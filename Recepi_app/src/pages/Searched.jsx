import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { styled } from 'styled-components';


export function Searched() {
  const [searchRecepi,setSearchRecepi]=useState([]);
  const params=useParams();
         const apiKey=import.meta.env.VITE_API_KEY;

    const getSearched=async(name)=>{
     const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${name}`).then((res)=>{
           const data = res.data.results;
           setSearchRecepi(data);
    }
     )
    }

    useEffect(()=>{
    getSearched(params.search);
    //console.log(params.search);
    },[params.search])
  return (
    <Grid>
       { searchRecepi.map((item)=>{
        return (
              
            <div key={item.id}>
              <Link to={"/recepi/"+item.id}>
                 <img src={item.image} alt={item.title} />
                 <h4>{item.title}</h4>
              </Link>
              </div>
                  )
        
       })}
    </Grid>
  )
}

const Grid =styled.div`
display: grid;
grid-template-columns:auto auto auto;
grid-gap:2rem;
margin:50px 0px;
h4{
width:100%;
text-align:center;
color:black;
text-decoration:none;
}
`
