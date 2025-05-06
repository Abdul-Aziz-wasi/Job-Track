import React from 'react';
import { NavLink } from 'react-router';
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
		<div className="navbar bg-base-100 shadow-sm">
		<div className="navbar-start">
		  <div className="dropdown">
			<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
			  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
			</div>
			<ul
			  tabIndex={0}
			  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-bold">
			 <li className=' active:text-blue-600'><NavLink to="/">Home</NavLink></li>
			<li><NavLink to="/details">Details</NavLink></li>
			<li><NavLink to="/profile">Profile</NavLink></li>
			</ul>
		  </div>
		  <div className=' p-4 flex gap-2'><p className=" text-2xl font-bold text-blue-800 ">Jobtrack</p><FaSearch className='mt-2' size={25}/></div>
		</div>
		<div className="navbar-center hidden lg:flex">
		  <ul className="menu menu-horizontal px-1">
			<li><NavLink to="/">Home</NavLink></li>
			<li><NavLink to="/details">Details</NavLink></li>
			<li><NavLink to="/profile">Profile</NavLink></li>
			
		  </ul>
		</div>
		<div className="navbar-end gap-1">
		  <NavLink className="btn btn-primary">Login</NavLink>
		  <NavLink className="btn btn-primary">Logout</NavLink>
		</div>
	  </div>
    );
};

export default Navbar;