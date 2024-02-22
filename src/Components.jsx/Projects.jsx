import React from 'react'
import ProjectComp from '../Atomic/ProjectComp'


const Projects = () => {
  return (

    <>
    
    <ProjectComp name={"Get it Ecommerce Website"} link={"https://getit-rstar.netlify.app/"}
     sty={"black"} duration={"5 days"} tech={"React JS,Javascript,React Bootstrap"} 
    about={"This website is to show case my skills on React js.Routing throught react-router-om package and controlled forms for login and sign up.Session management through Context Api.Dynamic Navbar according to session. I have done with fetching the data from the api for the products and htey can be filter. "}/>
      
    <ProjectComp name={"Catch the rabbit Game"} sty={"cyan"} duration={"2 days"} link={"https://catchtherabbit-rstar.netlify.app"}  tech={"Javascript,Html,Css"} 
    about={"This is a  copy of small game which was in the old box TV.Player have to hit the box where the rabbit comes."} />
   
    <ProjectComp name={"Webby photo editor"} sty={"lightyellow"} link={"https://webbyphotoeditor.netlify.app"}duration={"3days"} tech={"Html,css,Boottsrap"} 
    about={"This is a photo editor in which the user can upload the photo and apply filters on it as well as the border color and the border size and then can download the photo"}/>
    </>

      <ProjectComp name={"Node JS Rest API Employee management api task for api"} sty={"lightyellow"} link={"https://github.com/Ritik00sharma00/Api-Project/tree/master"}duration={"5days"} tech={"Node Js,Express Js, Mongo db"} 
    about={"This is the api made from Node Js,Express Js,Mongo db, which shows employee task management Api."}/>
    </>
   
  )
}

export default Projects
