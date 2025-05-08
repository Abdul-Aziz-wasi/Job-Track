import React, { createContext,  useEffect,  useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar';
import { createUserWithEmailAndPassword,  onAuthStateChanged,  signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import Footer from '../Footer';

export const valueContext =createContext()
const Root = () => {
    const [user, setUser]=useState(null);
    console.log(user)
    const handleSignIn =(email,password)=>{
      

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          
          const user = userCredential.user;
          console.log(user)
          setUser(user)
         
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

    const logOut =()=>{


        return signOut(auth)
    }

    useEffect(()=>{
     const unsubscribe=   onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        });
        return ()=>{
            unsubscribe()

        }

    },[])



    const contextValue ={
        handleSignIn,
        handleSignUp,
        user,
        setUser,
        logOut
    }


   
    return (
        <div>
           
            <valueContext.Provider value={contextValue}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            </valueContext.Provider>
        </div>
    );
};

export default Root;