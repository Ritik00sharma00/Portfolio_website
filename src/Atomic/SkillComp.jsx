import { Container } from '@mui/material'
import React from 'react'
import TextContainer from './TextContainer'

const SkillComp = ({heading,skill}) => {
   
  return (
    <>
    <Container style={{background:"black",display:"inline-block",padding:"10vw",
    maxWidth:"100%",textAlign:"left",borderRadius:"400PX",margin:"1vh 1vw 1vh 0vw "}}>
        <h2 style={{color:"purple",fontFamily:"fantasy",marginLeft:"10vw"}}>{heading}</h2>
         {skill.map((element,index)=>{return (<div style={{margin:"1vw 15vw 1vw 10vw"}}><TextContainer detail={element}/></div>)})}
       
       
    </Container>
    </>
  )
}

export default SkillComp
