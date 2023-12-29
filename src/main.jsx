import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Components.jsx/Home.jsx'
import Projects from './Components.jsx/Projects.jsx'
import Skills from './Components.jsx/Skills.jsx'
import Education from './Components.jsx/Education.jsx'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  NavLink,
} from "react-router-dom";


const router=createBrowserRouter([
  {
    path:"",
    element:<App/>,
    children:
    [ 
      {
      path:"/",
      element:<Home/>
      },
      {
        path:"/Education",
        element:<Education/>
        },
      {
      path:"/Projects",
      element:<Projects/>
      },
    {
      path:"/Skills",
      element:<Skills/>
    }
  ]
  },
  
 

])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />

)
