// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

const BookDetail = () => {
  const {id}=useParams();
  const[bookDetail, setBookDetail]=useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:5555/books/${id}`)
    .then((res)=>{
      console.log(res.data);
      setBookDetail(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  },[id])

  return (
    <div className="p-10 flex gap-5 justify-center items-center">
      <div className="flex-1 p-5 border-2 bg-white rounded-lg shadow-lg mx-auto">
        <h1 className="text-3xl font-semibold">{bookDetail.title}</h1>
        <div className="flex justify-between">
          <h2 className="text-md font-semibold">{bookDetail.author}</h2>
          <Link to={`/books/searchresults/${bookDetail.author}`} className="underline hover:text-blue-300">More from this Author</Link>
        </div>
        <div className="flex gap-5 pt-10">
          <img src={bookDetail.cover} alt={bookDetail.title} className="object-contain h-[500px] rounded-xl"/>
          <div className="">
            <h1 className="text-lg font-bold">Synopsis:-</h1>
            <br />
            <p className="text-justify mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ducimus placeat totam natus ex commodi qui nisi cupiditate molestias quisquam dolorem vero saepe quam culpa reprehenderit maiores, repudiandae, praesentium laborum nam delectus aut a odit ab.
              <br />
              <br />
              Dolores, quaerat porro a, at aliquid beatae odio maiores exercitationem rem, velit non accusamus illo quas numquam dolore distinctio nam nihil dicta minima ad? Tempore distinctio est dolor saepe provident? Ut consequatur fuga iure fugit illo consequuntur quo totam at magnam officiis recusandae unde nobis repellat quisquam nostrum cupiditate tempora alias architecto, asperiores maxime libero omnis voluptatum. Quidem ad deleniti nesciunt aut eos ducimus......</p>
              <Link to='readbook'>
                <button className="float-right shadow-lg px-3 py-2 bg-gray-100 border-2 hover:scale-105 transition-transform rounded-lg font-semibold">Read Now with Premium</button>
              </Link>
              
          </div>
        </div>
      </div>
      <div className="min-w-[500px] ">

      </div>
    </div>
  )
}

export default BookDetail