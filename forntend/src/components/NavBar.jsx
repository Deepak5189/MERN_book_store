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
    <div className="p-5 w-[100vw] flex justify-between bg-gray-200  items-center">

      {/* Website Logo here */}
      <div className="">
        <Link to='/'>
          <div className="p-3 flex items-center justify-center text-center rounded-full bg-blue-300">
            <h1 className="text-xl font-bold">B</h1>
            <h2 className="text-xl font-thin">M</h2>
          </div>
        </Link>
      </div>

        {/* second part of nav bar */}
      <div className="flex justify-around items-center">

        {/* NavLinks here */}
        <nav className="flex justify-evenly items-center gap-4">
          <span className="border-solid border-[1px] rounded-full border-gray-500 ">
            <input type="search" className="focus:outline-none ml-2 bg-transparent" placeholder="Search by name..." value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
            <button className="p-2 ml-3 bg-blue-300 rounded-2xl outline-blue-300 w-16 font-semibold   outline outline-2 ">
              <Link to={`books/searchresults/${search}`}>Search</Link>
            </button>
          </span>
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
            <button className="p-2 ml-3 bg-blue-300 rounded-2xl outline-blue-300 w-16 font-semibold hover:text-white hover:bg-black outline outline-2 hover:outline-black">LogIn</button>
          </Link>
        }
      </div>
    </div>
  )
}

export default NavBar