import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import TextContainer from './TextContainer'
const ProjectComp = (props) => {
  
  return (
    <>
    
    <Container style={{background:props.sty,display:"inline-block",padding:"2vw",
                      maxWidth:"40%",borderRadius:"40PX",margin:"1vh 1vw 1vh 1vw "}}>

      <h1 style={{color:"red"}}>{props.name}</h1>
      <a href={props.link}><h2>Click Here to see the project</h2></a>
      <TextContainer detail={props.duration} width={"min-content"}/>
      <TextContainer detail={props.tech} width={"min-content"}/>
      <TextContainer detail={props.about} width={"fit-content"}/>

      

    </Container>
    
    </>
  )
}

export default ProjectComp
