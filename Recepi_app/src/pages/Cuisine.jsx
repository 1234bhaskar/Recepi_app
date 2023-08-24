import React, { useEffect, useState } from 'react'
import styled  from 'styled-components';
import {motion} from 'framer-motion';
import { Link,useParams  } from 'react-router-dom';
import axios from 'axios';
//import { apikey } from '../Components/Popular';
function Cuisine() {
           const apiKey=import.meta.env.VITE_API_KEY;
    const [cuisine,setCuisine]=useState([]);
    let params =useParams();
    const getCusine = async(name)=> {
       const res =await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${name}`)
         .then(async(res)=>{
        const recepies =await res;
        //console.log(recepies.data.results);
         setCuisine(recepies.data.results);
         }).catch((e)=>(console.log(e)))
    }
    useEffect(()=>{
         getCusine(params.id)
         //console.log(params.id);
    },[params.id])
  return (
    <Grid 
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    >
      {
        cuisine.map((item)=>{
          return(

            <div key={item.id}>
              <Link to={"/recepi/"+item.id}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
              </Link>
          </div>
            )

        })
      }
    </Grid>
  )
}

const Grid =styled(motion.div)`
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


export default Cuisine