import { Container } from '@mui/material'
import React from 'react'
import TextContainer from './TextContainer'

const SkillComp = ({heading,skill,bg="black"}) => {
   
  return (


    <>

       

    <Container style={{background:"linear-gradient(to right, cyan,black)",display:"inline-block",
    maxWidth:"100vw",borderRadius:"400PX",padding:"2vw"}}>
        <h2 style={{color:"red",marginLeft:"5vw"}}>{heading}</h2>
         {skill.map((element,index)=>{return (<div style={{textAlign:"center"}}><TextContainer key={index} detail={element}/></div>)})}
       
       
    </Container>
    </>
  )
}

SkillComp.bg=
{
  bg:"black"
}


export default SkillComp

