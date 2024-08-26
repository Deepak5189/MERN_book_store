// import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ShowBooks from './pages/ShowBooks'
import DeleteBook from './pages/DeleteBook'
import CreateBook from './pages/CreateBook'
import EditBook from './pages/editBook'
import NavBar from './components/NavBar'
import Contact from './pages/Contact'
import About from './pages/About'
import Blogs from './pages/blogs'
import Genre from './components/Genre'
import SearchResults from './components/SearchResults'
import BookDetail from './pages/BookDetail'
import ReadBook from './pages/ReadBook'
import Authentication from './pages/Authentication'

const App = () => {
  
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
    <div className='bg-gray-300 w-screen pt-24'>
        <NavBar genres={genres} />
      <Routes>
        <Route path='/' element={<Home genres={genres}/>}/>
        <Route path='/authentication' element={
          <Authentication/>
        }/>
        <Route path='/books' element={<ShowBooks/>}/>
        <Route path='/books/bookdetails/:id/readbook' element={<ReadBook/>}/>
        <Route path='/books/create' element={<CreateBook/>}/>
        <Route path='/books/edit/:id' element={<EditBook/>}/>
        <Route path='/books/bookdetails/:id' element={<BookDetail/>}/>
        <Route path='/books/delete/:id' element={<DeleteBook/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/books/genre/:genre' element={<Genre/>}/>
        <Route path='/books/searchresults/:author' element={<SearchResults/>}/>
      </Routes>
    </div>
    
  )
}

export default App