import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react';
import styled from "styled-components";
import {Splide,SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
function Veggie() {
  
  const apiKey=import.meta.env.VITE_API_KEY;
  const[Veggie,setVeggie]=useState([]);
    useEffect(() => {
      getVeggei();
    },[])
    //as we do not want our api limit to be reached we can store our data in local storage
    const getVeggei = async ()=>{
      const check= localStorage.getItem('Veggie');
      if(check){
       setVeggie(JSON.parse(check));
      }else{
        
        const res = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=11&tags=vegetarian`).then((res)=>{
           const data = res.data.recipes;
           localStorage.setItem("Veggie",JSON.stringify(data))
           setVeggie(data);
           //console.log(data);
          })
        }
      }
  return (
    <div>
      <Wrapper>
                    <h2>Our Vegeterian Picks</h2>
                    <Splide options={{
                      perPage:3,
                      arrows:false,
                      //pagination:false,
                      drag:"free",
                      gap:"10px",
                      
                    }}>
                    {
                      Veggie.map((recipes)=>{
                        return(
                          <SplideSlide key={recipes.id}>
                          <Card key={recipes.id}>
                            <Link to={'/recepi/'+recipes.id}>
                             <p>{recipes.title}</p>
                             <img src={recipes.image} alt={recipes.title} />
                             <Gradient/>
                            </Link>
                          </Card>
                          </SplideSlide>
                        )
                      })
                    }
                    </Splide>
                    </Wrapper>
    </div>
  )
}

const Wrapper =styled.div`
margin:4rem 0rem;
`;
const Gradient =styled.div`
z-index:3;
position:absolute;
width:100vw;
height:100vh;
background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));

`;                  
                  
const Card= styled.div`
height:45vh;
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
  height:50vh;
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

export default Veggie