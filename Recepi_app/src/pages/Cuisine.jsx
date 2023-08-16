import React, { useEffect, useState } from 'react'
import styled  from 'styled-components';
import {motion} from 'framer-motion';
import { Link,useParams  } from 'react-router-dom';
import axios from 'axios';
//import { apikey } from '../Components/Popular';
function Cuisine() {
        const apikey="553295c8cdb84287a0e47d3b9bca6230";
    const [cuisine,setCuisine]=useState([]);
    let params =useParams();
    const getCusine = async(name)=> {
       const res =await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apikey}&cuisine=${name}`)
         .then(async(res)=>{
        const recepies =await res;
        //console.log(recepies.data.results);
         setCuisine(recepies.data.results);
         }).catch((e)=>(console.log(e)))
    }
    useEffect(()=>{
         getCusine(params.id)
         console.log(params.id);
    },[params.id])
  return (
    <Grid>
      {
        cuisine.map((item)=>{
          return(

            <div>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
          </div>
            )

        })
      }
    </Grid>
  )
}

const Grid =styled.div`
display: grid;
grid-template-columns:auto auto auto;
grid-gap:2rem;
margin:50px 0px;
`

export default Cuisine