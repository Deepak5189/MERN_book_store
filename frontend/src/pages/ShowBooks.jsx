// import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const ShowBooks = () => {
  const [books, setBooks] = useState([]);
  const navigate=useNavigate();
  
  useEffect(() => {
    axios
      .get("http://localhost:5555/books")
      .then((res) => {
        // console.log(res)
        const data=res.data.data;
        console.log(data)
        setBooks(data)
        console.log(books)
        // const data=res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  const handleBookNav=()=>{
    navigate('/books');
  }

  return (
    <div className="bg-white p-5 w-[95%] shadow-lg rounded-lg m-auto">
      <h1 className="text-3xl font-semibold">Books for you...</h1>
      <div className=" grid lg:grid-cols-4 gap-5 mt-5">
        {books?.map((item) => {
          return (
            <div className="px-5 py-2 mt-5 m-auto flex flex-col shadow-lg border-2 justify-evenly w-[250px] h-[450px] bg-gray-200 border-solid border-gray-300 rounded-lg" key={item._id}>
              <div className="rounded-lg overflow-hidden">
                <img src={item.cover} alt={item.title} className="object-fill w-[300px] h-[300px]"/>
              </div>
              <h1 className="text-lg font-semibold max-h-14 overflow-clip">{item.title}</h1>
              <p className="text-md font-thin">{item.author}</p>
              <div className="flex justify-between items-center">
                <p className="text-md font-medium">{item.publishYear}</p>
                <Link to={`/books/bookdetails/${item._id}`}>
                  <button className="shadow-lg px-3 py-2 rounded-lg border-2 bg-white font-semibold hover:scale-105 transition-transform">Download</button>
                </Link>
                
              </div>
            </div>
          );
        })}
        <div className=" mt-5 flex flex-col shadow-lg border-2 justify-evenly w-[250px] h-[450px] bg-gray-200 border-solid border-gray-300 rounded-lg cursor-pointer m-auto" onClick={handleBookNav}>
          <button className="">Check Out our all collections.....</button>
        </div>
      </div>
    </div>
  );
};

export default ShowBooks;
