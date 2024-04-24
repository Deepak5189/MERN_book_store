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
        <div className="m-3  shadow-lg w-full backdrop-blur-lg rounded-xl">
          {
            genres.map((item,i)=>{return(
              <div className="border-none border-[1px] border-white w-full p-2" key={i}>
                <Link to={`books/genre/${item.category}`}>{item.category}</Link>  
              </div>
            )})
          }
        </div>
      </div>}
    </div>
  )
}

export default Categories