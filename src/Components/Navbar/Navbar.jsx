import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Navbar = () => {
    const {user,signOutUser}=use(AuthContext);

    const handleSignOut =()=>{
        signOutUser()
        .then(()=>{
            console.log('signOut user')
        }).catch((error)=>{
            console.log(error)
        })

    }

    const links =<>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/privacy'>Privacy & Policy</NavLink></li>
    </>
    return (
    <div className="navbar bg-white shadow-md text-gray-800">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h10m-10 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-md bg-white rounded-box w-52 text-base font-medium"
      >
        {links}
      </ul>
    </div>
    <a className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
  Career Hub
</a>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-2 text-base font-medium">
      {links}
    </ul>
  </div>

<div className="navbar-end gap-3">
  {user ? (
    <>
      <button
        onClick={handleSignOut}
        className="btn bg-red-500 text-white hover:bg-red-600 border-none"
      >
        Sign Out
      </button>

      {/* Profile Picture with Link to /profile */}
      <Link to="/myprofile" title="My Profile">
        <img
          src={user.photoURL || '/default-avatar.png'}
          alt="User Profile"
          className="w-10 h-10 rounded-full border-2 border-primary hover:scale-105 transition-transform"
        />
      </Link>
    </>
  ) : (
    <>
      <NavLink className="btn btn-outline btn-primary" to="/signup">
        Sign Up
      </NavLink>
      <NavLink className="btn btn-outline btn-primary" to="/signin">
        Sign In
      </NavLink>
    </>
  )}
</div>

</div>

    );
};

export default Navbar;