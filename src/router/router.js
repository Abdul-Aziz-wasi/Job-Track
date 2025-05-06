import {
    createBrowserRouter,
   
  } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home";
import Details from "../Details";
import Profile from "../Profile";
  

  
 export const router = createBrowserRouter([
    {
      path: "/",
     Component:Root,

     children:[
        {
            path:"/",
            Component:Home
        },
        {
            path:"/details",
            Component:Details
        },
        {
            path:"profile",
            Component:Profile
        }
     ]
    },
  ]);