import { Container } from '@mui/material'
import TextContainer from './TextContainer'
import React from 'react'

const CardComp = (props) => {
  return (
    <>
  <Container style={{background:"black",display:"inline-block",maxWidth:"min-content",textAlign:"left",padding:"5%",borderRadius:"500px",height:"max-content",margin:"5vw"}}>
     
           <TextContainer detail={props.course} />
           <TextContainer detail={props.board} />
           <TextContainer detail={props.year}/>
           <TextContainer detail={props.percentage}/>
           
  </Container>
    
    </>
  )
}

export default CardComp

CardComp.defaultProps = {

  percentage:"",
}