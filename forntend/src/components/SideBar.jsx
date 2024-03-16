// import React from 'react'

// import { useState } from "react"
import { Link } from "react-router-dom";

const SideBar = ({genres}) => {

  // const [isGenre, setIsGenre] = useState(false);

  // const handleGenre=()=>{
  //   setIsGenre(!isGenre);
  // }
  return (
    <div className="bg-gray-300/70 w-full  h-auto p-3 rounded-lg">
      <h3 className="font-bold text-xl">Genre</h3>
      <div>
      {
            genres.map((item,i)=>{return(
              <div className="border-none border-[1px] border-white w-full p-2" key={i}>
                <Link to={`books/genre/${item.category}`}>{item.category}</Link>  
              </div>
            )})
          }
      </div>
    </div>
  )
}

export default SideBar