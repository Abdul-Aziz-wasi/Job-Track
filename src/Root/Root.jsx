import React, { createContext } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

export const valueContext =createContext()
const Root = () => {
    const handleSignIn =(email,password)=>{
        console.log("login",email,password)

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          
          const user = userCredential.user;
          console.log(user)
         
        })
        .catch((error) => {
            console.log(error)
         
        });

    }

    const handleSignUp =(email,password)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
           
            const user = userCredential.user;
            console.log(user)
            alert("user sign up successfully")
         })
         .catch((error) => {
            
            console.log(error)
          });
    }
    const contextValue ={
        handleSignIn,
        handleSignUp
    }
    return (
        <div>
           
            <valueContext.Provider value={contextValue}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            </valueContext.Provider>
        </div>
    );
};

export default Root;