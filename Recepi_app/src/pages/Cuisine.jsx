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
      const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${name}&apiKey=${apikey}`)
         .then(async()=>{
        const recepies =await res;
        console.log(recepies.results);
         // setCuisine(recipes.results)
         })
    }
    useEffect(()=>{
         getCusine(params.id)
         //console.log(params.id);
    },[params.id])
  return (
    <div>Cuisine</div>
  )
}

export default Cuisine