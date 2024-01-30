import React from 'react'
import Container from 'react-bootstrap/esm/Container'

const TextContainer = (props) => {
  return (

    <>
 
    <Container style={{float:'left',color:"black",borderRadius:"20px",
    background:props.bg,maxWidth:"max-content", 
                               fontSize:"display-4",fontStyle:"oblique",textAlign:"center",height:"auto"}}>
    {props.detail}
  
  </Container>
    </>
  )
}

export default TextContainer
TextContainer.defaultProps = {
  width:"min-content"
}

TextContainer.defaultProps = {
  bg:"linear-gradient(pink,cyan)",

}