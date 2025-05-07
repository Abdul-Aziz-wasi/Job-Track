import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { valueContext } from './Root/Root';


const SignUp = () => {
    const {handleSignUp}=useContext(valueContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        const user = e.target.user.value;
        const email =e.target.email.value;
        const password =e.target.password.value;
        const confirmPassword =e.target.confirmpassword.value;
        if(password.length < 6){
            alert("password must be greater than 6 digit or equal");
            return;
        }
        if(password!==confirmPassword){
            alert("password not matched");
            return;
        }
        if(!/[a-z]/.test(password)){
            alert('password contain atleast a lowercase');
            return;
        }
        if(!/[A-Z]/.test(password)){
            alert('password contain atleast a Uppercase');
            return;
        }
        handleSignUp(email,password)
        
        
    }
    return (
        <div className="flex flex-col max-w-md mx-auto p-6 rounded-md sm:p-10 dark:bg-gray-50 my-4 bg-black text-white">
        <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign up</h1>
            <p className="text-sm dark:text-gray-600">Sign up a new account</p>
        </div>
        <form onSubmit={handleSubmit} noValidate="" action="" className="space-y-12">
            <div className="space-y-4">
                <div>
                    <label htmlFor="user" className="block mb-2 text-sm">User Name</label>
                    <input type="text" name="user" id="user" placeholder="user name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                    <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                </div>
                <div>
                    <div className="flex justify-between mb-2">
                        <label htmlFor="password" className="text-sm">Password</label>
                        
                    </div>
                    <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                </div>
                <div>
                    <div className="flex justify-between mb-2">
                        <label htmlFor="password" className="text-sm">Confirm Password</label>
                        
                    </div>
                    <input type="password" name="confirmpassword" id="confirmpassword" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                </div>
            </div>
            <div className="space-y-2">
                <div>
                    <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign up</button>
                </div>
                <p className="px-6 text-sm text-center dark:text-gray-600">Already have an account?
                    <NavLink to="/signin" rel="noopener noreferrer" href="#" className="hover:underline text-blue-600">Sign in</NavLink>.
                </p>
            </div>
        </form>
    </div>
    );
};

export default SignUp;