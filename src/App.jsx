import React from 'react'
import './App.css'
import NavComp from './Components.jsx/NavComp'
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'
const App = () => {

  return (
    <>
    <div style={{background:"linear-gradient(lightcoral,black)"}}>
    <NavComp/>
    <Outlet/>
    <Container style={{background:"white",borderRadius:"150px",position:"relative",bottom:"0",marginBottom:"-10px"}}><h1 style={{marginLeft:"40%",fontSize:"14vw"}}>Thanks for coming</h1></Container>
    </div>
   
    
    </>
  )
}

export default App
