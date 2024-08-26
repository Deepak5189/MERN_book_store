// import React from 'react'

import { useState } from "react"

const CreateBook = () => {
  const [book, setBook]=useState({
    title:'',
    author:'',
    genre:'',
    description:'',
    coverImage:'',
    price:null,
    stockQuantity:10,
    publicationDate:Date.now(),
    featured:true,
    ratings:[],
  });
  const handleChange=(event)=>{
    setBook({
      ...book,
      [event.target.name]: event.target.value
    });
    console.log(book)
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    // 
  }

  return (
    <div className="pt-5 px-10">
      <div className="bg-white shadow-lg rounded-lg p-5">
        <h2 className="text-3xl font-semibold">Upload a book</h2>
        <form action="handleSubmit" onSubmit={(event)=>handleSubmit()} className="flex flex-col gap-5 p-10">
          <div className="flex flex-col gap-3">
            <label htmlFor="text" className="text-xl font-semibold">Title</label>
            <input type="text" name="title" id="title" className="px-3 py-2 rounded-lg focus:outline-none shadow-lg border-gray-200 border-2" placeholder="Book title goes here..." onChange={handleChange} />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="text" className="text-xl font-semibold">Author *</label>
            <input type="text" name="author" id="author" className="px-3 py-2 rounded-lg focus:outline-none shadow-lg border-gray-200 border-2" placeholder="Author's name..." onChange={handleChange}/>
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="text" className="text-xl font-semibold">Genre</label>
            <input type="text" name="genre" id="genre" className="px-3 py-2 rounded-lg focus:outline-none shadow-lg border-gray-200 border-2" placeholder="Book's Genre..." onChange={handleChange}/>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="text" className="text-xl font-semibold">Description</label>
            <input type="text" name="description" id="description" className="px-3 py-2 rounded-lg focus:outline-none shadow-lg border-gray-200 border-2" placeholder="Story's summary..." onChange={handleChange} />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="text" className="text-xl font-semibold">Cover Image</label>
            <div className="flex items-center gap-52">
              <input type="text" name="coverImage" id="coverImage" className="flex-1 px-3 py-2 rounded-lg focus:outline-none shadow-lg border-gray-200 border-2" placeholder="Link to Book's cover page..." onChange={handleChange} />
              {book?.coverImage &&
              <img src={book.coverImage} alt="" className="w-20 h-20"/>}
            </div>

          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="text" className="text-xl font-semibold">Price (in rupees)</label>
            <input type="text" name="price" id="price" className="px-3 py-2 rounded-lg focus:outline-none shadow-lg border-gray-200 border-2" placeholder="Price of the book..." onChange={handleChange} />
          </div>
          <div className="flex justify-around gap-10 px-10">
            <button className="flex-1 font-semibold text-lg px-3 py-2 bg-white shadow-lg border-2 border-gray-200 rounded-lg">Upload</button>
            <button className="flex-1 font-semibold text-lg px-3 py-2 bg-white shadow-lg border-2 border-gray-200 rounded-lg">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateBook