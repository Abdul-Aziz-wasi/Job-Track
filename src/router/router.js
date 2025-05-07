import {
    createBrowserRouter,
   
  } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home";
import Details from "../Details";
import Profile from "../Profile";
import JobDetails from "../JobDetails";
import JobInfo from "../JobInfo";
import JobApply from "../JobApply";
  

  
 export const router = createBrowserRouter([
    {
      path: "/",
     Component:Root,

     children:[
        {
            path:"/",
            Component:Home,
            loader:()=>fetch("/job.json")
        },
        {
            path:"/details",
            Component:Details
        },
        {
            path:"profile",
            Component:Profile
        },
        {
          path:"/jobdetails/:id",
          Component:JobDetails,
          loader:()=>fetch("/job.json")
        },
        {
          path:"/jobinfo",
          Component:JobInfo,
          
        },
        {
          path:"/job-apply/:id",
          Component:JobApply,
          loader:()=>fetch("/job.json")
        }
       
     ]
    },
  ]);