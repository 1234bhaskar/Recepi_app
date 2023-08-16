import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react';
import styled from "styled-components";
import {Splide,SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';


function Popular() {
  
  const[popular,setPopular]=useState([]);
    useEffect(() => {
      getPopular();
    },[])
    const apikey="553295c8cdb84287a0e47d3b9bca6230";
   //const apikey=process.env.VITE_API_KEY;
    //as we do not want our api limit to be reached we can store our data in local storage
    const getPopular = async ()=>{
      const check= localStorage.getItem('popular');
      if(check){
       setPopular(JSON.parse(check));
      }else{
         const res = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apikey}&number=11`).then((res)=>{
           const data = res.data.recipes;
           localStorage.setItem("popular",JSON.stringify(data))
           setPopular(data);
           console.log(data);
          })
        }
      }
          
     
return (
    <div>
                   <Wrapper>
                    <h2>Popular Picks</h2>
                    <Splide options={{
                      perPage:4,
                      arrows:false,
                      //pagination:false,
                      drag:"free",
                      gap:"10px",
                      
                    }}>
                    {
                      popular.map((recipes)=>{
                        return(
                          <SplideSlide key={recipes.id}>
                          <Card key={recipes.id}>
                             <p>{recipes.title}</p>
                             <img src={recipes.image} alt={recipes.title} />
                             <Gradient/>
                          </Card>
                          </SplideSlide>
                        )
                      })
                    }
                    </Splide>
                    </Wrapper>
    </div>
  );
                  }

const Wrapper =styled.div`
margin:4rem 0rem;
`;
const Gradient =styled.div`
z-index:3;
position:absolute;
width:100vw;
height:100vh;
background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5))

`;                  
                  
const Card= styled.div`
height:37vh;
overflow:hidden;
border:solid black 1px;
border-radius:20px;
display: flex;
flex-direction:column;
justify-content:centre;
align-items:centre;
position:relative;

img{
  border-radius:5px;
  height:100vh
  width:100%;
  object-fit:cover;
}
p{
  position:absolute;
z-index:10;
left:50%;
bottom:0%;
transform:translate(-50%,0%);
color:white;
}
`;

export default Popular;
