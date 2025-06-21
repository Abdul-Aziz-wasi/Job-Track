import {
    createBrowserRouter,
   
  } from "react-router";
import Root from "../Root/Root";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Home from "../Components/Home";
import CompanyDetails from "../Components/CompanisDetails/CompanyDetails";
import PrivateRoute from "../PrivateRouter/PrivateRoute";
import MyProfile from "../pages/MyProfile/MyProfile";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import NotFound from "../pages/NotFound";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";


  

  
 export const router = createBrowserRouter([
    {
      path: "/",
     Component:Root,
    errorElement:<NotFound></NotFound>,
     

     children:[
      {
        index:true,
        Component:Home

      },
      {
        path:"/companies/:id",
        element:<PrivateRoute>
          <CompanyDetails></CompanyDetails>
        </PrivateRoute>

      },
      {
        path:"/myprofile",
        element:<PrivateRoute>
          <MyProfile></MyProfile>
        </PrivateRoute>

      },
      {
        path:"/update-profile",
        element:<PrivateRoute>
          <UpdateProfile></UpdateProfile>
        </PrivateRoute>
      },
      {
        path:"/privacy",
        Component:PrivacyPolicy
      },
       
        {
          path:"/signin",
          Component:SignIn
        },
        {
          path:"/signup",
          Component:SignUp
        },
        {
          path:'/forget-password',
          Component:ForgotPassword
        }
       
     ]
    },
  ]);