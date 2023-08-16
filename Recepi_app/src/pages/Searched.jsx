import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';


export function Searched() {
  const [searchRecepi,setSearchRecepi]=useState([]);
  const params=useParams();
       const apikey="553295c8cdb84287a0e47d3b9bca6230";
    const getSearched=async(name)=>{
     const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apikey}&query=${name}`).then((res)=>{
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
                 <img src={item.image} alt={item.title} />
                 <h4>{item.title}</h4>
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
`
