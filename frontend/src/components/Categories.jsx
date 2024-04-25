// import React from 'react'

import { useState } from "react";
import { Link } from "react-router-dom";

const Categories = ({genres}) => {
  const[cat, setCat] =useState(false);


  return (
    <div className='relative' onMouseEnter={()=>setCat(true)} onMouseLeave={()=>setCat(false)}>
      <h2>Categories</h2>
      {cat && 
      <div className="absolute  top-5 translate-x-[-25%] w-36 flex items-center flex-col">
        <div className="shadow-lg w-full backdrop-blur-lg rounded-xl">
          {
            genres.map((item,i)=>{return(
              <div className="flex flex-col items-center border-gray-300 w-full h-10 box-border justify-center" key={i}>
                  <hr className='py-[0.25px] bg-gray-200 w-full h-0'/>
                <Link to={`books/genre/${item.category}`} className='hover:bg-gray-100 transition w-full h-full flex px-2 text-center m-auto'>{item.category}</Link>  
              </div>
            )})
          }
        </div>
      </div>}
    </div>
  )
}

export default Categories