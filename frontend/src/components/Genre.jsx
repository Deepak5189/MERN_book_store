// import React from 'react'
import { useParams } from 'react-router-dom'

const Genre = () => {
  const {genre}=useParams();
  return (
    <div className='pt-5 px-10'>
      <div className="bg-white shadow-lg rounded-lg p-5">
      <h2 className="text-3xl font-semibold">Category: {genre}</h2>
      
      </div>
    </div>
  )
}

export default Genre