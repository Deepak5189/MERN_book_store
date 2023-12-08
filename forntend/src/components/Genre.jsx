// import React from 'react'
import { useParams } from 'react-router-dom'

const Genre = () => {
  const {genre}=useParams();
  return (
    <div>{genre}</div>
  )
}

export default Genre