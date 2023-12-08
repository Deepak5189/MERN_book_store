// import React from 'react'

import { useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const[cat, setCat] =useState(false);

  const genres=[
    {
      category:"fiction",
      subCategory:[
        "Mystery",
        "Romance",
        "Sci-fi",
        'Fantasy',
        'Thriller',
        'Horror',
        'Adventure',
      ]
    },
    {
      category:"Non-Fiction",
      subCategory:[
        'Biography/Autobiography',
        'Self-Help',
        'True Crime',
        'History',
        'Science',
        'Travel',
        'Health and Wellness',
        'Cooking',
        'Essays',
      ]
    },
    {
      category:"children",
      subCategory:[
        "Picture Books",
        'Young Adult (YA)',
        'Middle-Grade',
        "Children's Fantasy",
        'Educational',
        'Bedtime Stories',
      ]
    },
    {
      category:"Mystry",
      subCategory:[
        'Detective',
        'Cozy Mystery',
        'Police Procedural',
        'Legal Thriller',
        'Espionage',
        'Noir',
        'True Crime',
      ]
    },
    {
      category:"Romance",
      subCategory:[
        'Contemporary Romance',
        'Historical Romance',
        'Paranormal Romance',
        'Regency Romance',
        'Romantic Suspense',
        'Erotica',
        'LGBTQ+ Romance',
      ]
    },
    {
      category:"self-help",
      subCategory:[
        'Motivation',
        'Leadership',
        'Relationships',
        'Time Management',
        'Mindfulness',
        'Positive Psychology',
        'Financial Success',
      ]
    },
    {
      category:"Biography",
      subCategory:[
        'Celebrity Biographies',
        'Political Memoirs',
        'Travel Memoirs',
        'Inspirational Memoirs',
        'Sports Biographies',
        'Musician Autobiographies',
      ]
    },
    {
      category:"Foods",
      subCategory:[
        'Baking',
        'Cooking Techniques',
        'International Cuisine',
        'Vegetarian and Vegan',
        'Healthy Eating',
        'Food History',
      ]
    },
  ];

  return (
    <div className='relative' onMouseEnter={()=>setCat(true)} onMouseLeave={()=>setCat(false)}>
      <h2>Categories</h2>
      {cat && 
      <div className="absolute top-5 translate-x-[-35%] w-[300px] flex items-center flex-col">
        <div className="m-3  bg-blue-300 rounded-xl">
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