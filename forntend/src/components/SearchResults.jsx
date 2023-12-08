// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

const SearchResults = () => {
  const {author}=useParams();
  const [authorResult, setAuthorResult]=useState([]);
  

  useEffect((()=>{
    axios.get(`http://localhost:5555/book`)
    .then((res)=>{
      setAuthorResult(res.data.data);
      console.log(authorResult);
    })
  }),[])


  return (
    <div className="p-10 ">
      <h1 className="text-xl font-semibold">Books from Author {author}</h1>
      <div className=" inline-flex flex-wrap gap-7 m-auto">
        {authorResult?.map((item) => {
          return (
            item.author===author &&<div className="p-2 mt-5 flex flex-col justify-evenly w-[250px] h-[450px] bg-gray-300/70 border-solid border-gray-300 rounded-lg" key={item._id}>
              <div className="">
                <img src={item.cover} alt={item.title} className="object-fill w-[300px] h-[300px]"/>
              </div>
              <h1 className="text-lg font-semibold max-h-14 overflow-clip">{item.title}</h1>
              <p className="text-md font-thin">{item.author}</p>
              <div className="flex justify-between items-center">
                <p className="text-md font-medium">{item.publishYear}</p>
                <Link to={`/books/bookdetails/${item._id}`}>
                  <button className="p-2 bg-blue-300 rounded-2xl outline-blue-300 font-semibold hover:text-white hover:bg-black outline outline-2 hover:outline-black">Download</button>
                </Link>
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default SearchResults