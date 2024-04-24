// import React from 'react'

import { Link} from "react-router-dom";
import Categories from "./Categories";
import { useState } from "react";

const NavBar = ({genres}) => {
  const[search, setSearch]=useState("");
  const user=false;

  // const handleClick=(e)=>{
  //   e.preventDefault();
  //   console.log(search);
  //   history.push(`books/searchresults/${search}`);
  //   setSearch("")
  // }




  return (
    <nav className="w-full fixed top-0 backdrop-blur-lg z-10">
      
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
          user?
          <div className="flex gap-2 justify-evenly items-center">
            <div className=" ml-2">WishList</div>
            <div className="">
              <Link to="cart">Cart</Link>
            </div>
            <div className="p-3 flex items-center justify-center text-center rounded-full bg-blue-300">
              <img src="/" alt="user" className="object-cover"/>
            </div>
          </div>
          :
          <Link to='/login'>
            <button className="ml-3 px-4 py-2 rounded-xl font-semibold shadow-lg border-[1px] border-gray-300">LogIn</button>
          </Link>
        }
      </div>
    </div>
  
    </nav>
  )
}

export default NavBar