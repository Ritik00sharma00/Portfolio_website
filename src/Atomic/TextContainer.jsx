import React from 'react'
import Container from 'react-bootstrap/esm/Container'

const TextContainer = (props) => {
  return (
    <>
    <Container style={{float:'left',color:"black",borderRadius:"20px",
    background:"linear-gradient(lightgreen,red)",maxWidth:props.width, 
                               margin:"1px",fontSize:"3vw",fontStyle:"oblique",textAlign:"left",height:"auto"}}>
    {props.detail}
  
  </Container>
    </>
  )
}

export default TextContainer
TextContainer.defaultProps = {
  width:"min-content"
}