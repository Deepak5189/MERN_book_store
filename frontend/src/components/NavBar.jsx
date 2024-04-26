// import React from 'react'

import { Link, useNavigate} from "react-router-dom";
import Categories from "./Categories";
import { useState } from "react";
import { useAuth } from "../context/authContext";

const NavBar = ({genres}) => {
  const[search, setSearch]=useState("");
  const [showUserOption, setShowUserOption]=useState('false');
  const token=localStorage.getItem("token");
  const {logout}=useAuth();
  const navigate=useNavigate();
  let isUserLoggedIn;
  if(!token){
    isUserLoggedIn=false;
  }
  else{
    isUserLoggedIn=true;
  }

  const handleAuth=()=>{
    logout();
    setShowUserOption(false);
    navigate('/');
    alert("user logged out successfully!");
  }
  const handleShowUserOption=()=>{
    setShowUserOption(!showUserOption);
  }

  // const handleClick=(e)=>{
  //   e.preventDefault();
  //   console.log(search);
  //   history.push(`books/searchresults/${search}`);
  //   setSearch("")
  // }




  return (
    <nav className="w-full fixed top-0 bg-white/75 backdrop-blur-lg z-10">
      
    <div className="flex justify-between items-center px-5 py-3 shadow-md">
      

      {/* Website Logo here */}
      <div className="">
        <Link to='/'>
          <div className="flex items-center border-2 p-2 border-gray-500 rounded-full">
            <h1 className="text-2xl font-bold">B</h1>
            <h2 className="text-xl font-thin">M</h2>
          </div>
        </Link>
      </div>

        {/* second part of nav bar */}
      <div className="flex justify-around items-center">

        {/* NavLinks here */}
        <nav className="flex justify-evenly items-center gap-4">
          <span className="relative w-[400px] rounded-full border-gray-300 shadow-lg border-[1px]">
            <input type="search" className="focus:outline-none px-4 py-2 bg-transparent w-40%" placeholder="Search by name..." value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
          </span>
            <button className="px-4 py-2 rounded-xl font-semibold shadow-lg border-[1px] border-gray-300 transform transition duration-300 hover:scale-105">
              <Link to={`books/searchresults/${search}`}>Search</Link>
            </button>
          <div className="relative cursor-pointer"><Categories genres={genres}/></div>
          <Link to='blogs' >Blogs</Link>
          <Link to='about'>About Us</Link>
          <Link to="contact">Contact Us</Link>
        </nav>

        <hr className=" ml-2 h-5 w-[2px] rounded-full bg-gray-300"/>

        {/* User section */}
        {
          isUserLoggedIn?
          <div className="flex gap-2 justify-evenly items-center px-5">
            <div className="relative w-12 h-12 flex justify-center items-center rounded-full border-2 border-gray-200 p-2 cursor-pointer" onClick={handleShowUserOption}>
              <img src="/vite.svg" alt="user" className="object-cover"/>
                <div className={`${!showUserOption?'absolute':'hidden'} transition-opacity top-12 w-[100px] flex flex-col items-center border-2 rounded-lg shadow-lg backdrop-blur-lg`}>
                  <div className=" p-2">WishList</div>
                  <hr className='py-[0.25px] bg-gray-200 w-full'/>
                  <div className="p-2">
                    <Link to="cart">Cart</Link>
                  </div>
                  <hr className='py-[0.25px] bg-gray-200 w-full'/>
                  <div className="p-3">
                    <button className='' onClick={handleAuth}>Logout</button>
                  </div>
                </div>
            </div>
          </div>
          :
          <Link to='/authentication'>
            <button className="ml-3 px-4 py-2 rounded-xl font-semibold shadow-lg border-[1px] border-gray-300">LogIn</button>
          </Link>
        }
      </div>
    </div>
  
    </nav>
  )
}

export default NavBar