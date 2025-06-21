import React, { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from './Context/AuthContext';
import Swal from 'sweetalert2';


const SignUp = () => {
  const { createUser,signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';
  

  const handleGoogleSignIn =()=>{
    signInWithGoogle()
    .then(result=>{
        console.log(result)
         navigate(from, { replace: true });
    }).catch(error=>{
        console.log(error)
        error()
    })
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.user.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photo.value;


    createUser(email, password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });

        
        if (user && user.updateProfile) {
          user.updateProfile({
            displayName: userName,
            photoURL: photoURL,
          });
        }

        console.log('User created:', user);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
        if(password.length < 6){
            Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "password must be greater than 6 digit or equal",
  footer: '<a href="#">Why do I have this issue?</a>'
});
            return;
        }
     
        if(!/[a-z]/.test(password)){
          
                Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "'password contain atleast a lowercase'l",
  footer: '<a href="#">Why do I have this issue?</a>'
});
            return;
        }
        if(!/[A-Z]/.test(password)){
            
            Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "'password contain atleast a Uppercase",
  footer: '<a href="#">Why do I have this issue?</a>'
});
            return;
        }
        handleSignUp(email,password)
  };

  return (
    <div className="flex flex-col max-w-md mx-auto p-6 rounded-md sm:p-10 dark:bg-gray-50 my-4 bg-black text-white">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign up</h1>
        <p className="text-sm dark:text-gray-600">Sign up for a new account</p>
      </div>
      	<div className="my-6 space-y-4">
		<button onClick={handleGoogleSignIn}  aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
			<p>Login with Google</p>
		</button>
		
		
	</div>
      <form onSubmit={handleSignUp} className="space-y-12">
        <div className="space-y-4">
          <div>
            <label htmlFor="user" className="block mb-2 text-sm">
              User Name
            </label>
            <input
              type="text"
              name="user"
              id="user"
              placeholder="Your name"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              
              placeholder="enter your email"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="photo" className="block mb-2 text-sm">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
             
              placeholder="enter a photo url"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm block mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
             
              placeholder="enter password"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          {/* <div>
            <label htmlFor="confirmpassword" className="text-sm block mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmpassword"
              placeholder="enter confirm password"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div> */}
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
            >
              Sign up
            </button>
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-600">
            Already have an account?
            <NavLink to="/signin" className="hover:underline text-blue-600 ml-1">
              Sign in
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
