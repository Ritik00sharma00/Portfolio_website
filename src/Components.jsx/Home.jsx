import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Image from 'react-bootstrap/Image';
import image from './myimage.jpg'
const Home = () => {
  return (
<>
<Container style={{background:"linear-gradient(white,lightcoral,black)",width:"50%",margin:"25%",textAlign:"left",padding:"5%",borderRadius:"60px",height:"240vh"}}>
  <Container style={{float:'left',background:"linear-gradient(lightblue,lightcoral,red)",fontSize:"4vw",fontStyle:"oblique",textAlign:"left"}}>
  Hello, I am Ritik Kumar Sharma, a recent graduate in Information Technology (IT) from B.Tech. Following my graduation, I successfully completed an offline course in Java Full Stack with React.js from Jspider
  </Container>
</Container>
</>
  )
}

export default Home
