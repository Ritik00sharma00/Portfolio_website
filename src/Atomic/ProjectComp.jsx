import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import TextContainer from './TextContainer'
const ProjectComp = (props) => {
  return (
    <>
    <Container style={{background:props.sty,display:"inline-block",padding:"10vw",
                      minWidth:"70%",textAlign:"left",borderRadius:"400PX",margin:"1vh 1vw 1vh 0vw "}}>

      <h1 style={{color:"lightgrey"}}>{props.name}</h1>
      <a href={props.link}><h2>Click Here to see the project</h2></a>
      <TextContainer detail={props.duration} width={"max-content"}/>
      <TextContainer detail={props.tech} width={"max-content"}/>
      <TextContainer detail={props.about} width={"max-content"}/>

      

    </Container>
    
    </>
  )
}

export default ProjectComp
