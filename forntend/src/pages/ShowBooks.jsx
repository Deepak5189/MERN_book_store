// import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShowBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5555/book")
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
  }, []);

  return (
    <div className="">
      <h1 className="text-3xl font-semibold">Books for you...</h1>
      <div className=" inline-flex justify-between flex-wrap gap-7 m-auto">
        {books?.map((item) => {
          return (
            <div className="p-2 mt-5 flex flex-col justify-evenly w-[250px] h-[450px] bg-gray-300/70 border-solid border-gray-300 rounded-lg" key={item._id}>
              <div className="rounded-lg overflow-hidden">
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
        <div className="flex-1 flex my-10 rounded-xl  bg-gray-300/70 justify-center">
          <button className="p-2 my-auto bg-blue-300 rounded-2xl outline-blue-300 font-semibold hover:text-white hover:bg-black outline outline-2 hover:outline-black">Check Out our all collections.....</button>
        </div>
      </div>
    </div>
  );
};

export default ShowBooks;
