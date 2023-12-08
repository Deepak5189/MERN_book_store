// import React from 'react'
import { Route, Routes } from 'react-router-dom'
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
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Authentication/>}/>
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
    </>
    
  )
}

export default App