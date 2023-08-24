import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { styled } from 'styled-components';



export function Recepi() {
    const params=useParams();
    const [initial,final]=useState({});
    const [active,setActive]=useState("instructions");
           
    const apiKey=import.meta.env.VITE_API_KEY;


  async function functionHandler (recepi){
       
    await axios.get(`https://api.spoonacular.com/recipes/${recepi}/information?apiKey=${apiKey}`).then( async(res)=>{
          const data= await res.data ;
          final(data);
         //console.log(data);
        })
    }

    useEffect(()=>{
        functionHandler(params.name)
    },[params.name])
  return (
    <RecepiWraper>
       <Img>
        <h1>{initial.title}</h1>
        <img src={initial.image} alt={initial.title} />
       </Img>
         
         <Buttons>
          <button className={active=="instructions"?"active":""} onClick={()=>setActive("instructions")}>Instruction</button>
          <button className={active=="ingredients"?"active":""} onClick={()=>setActive("ingredients")}>Ingredients</button>
         </Buttons>

         <Info>
          {
           active=="instructions" 
           &&
            (<div>
                <h3 dangerouslySetInnerHTML={{__html:initial.summary}}></h3>
                <h3 dangerouslySetInnerHTML={{__html:initial.instructions}}></h3>
              </div>)
              }
                 
                 {
                     active=="ingredients" 
                      &&
                   (<ul>
                {
                  initial.extendedIngredients.map((ingredient)=>
                  (
                    <li key={ingredient.id}>{ingredient.original}</li>
                    )
                    
                    )
                }
              </ul>)
                  }
         </Info>
    </RecepiWraper>
  )
}

const RecepiWraper=styled.div`
display:flex;
flex-direction:column;
align-item:center;
width:100%;
margin:30px 0;
.active{
    background:#252B48;
    color:white;
}
`
const Img =styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
`

const Buttons=styled.div`
width:100%;
display:flex;
justify-content:center;
margin:30px 0;
button{
  border:2px solid #252B48;
  background:white;
  color:#252B48;
  margin:0 40px;
  padding:2px;
  
}
`
 const Info=styled.div`
display:flex;
flex-direction:column;
`