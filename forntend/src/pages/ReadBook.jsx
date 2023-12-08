// pages/BookPage.js
// import React from 'react';
import { useParams } from 'react-router-dom';
import PdfReader from '../components/PdfReader';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ReadBook = () => {
  const pdfUrl = 'https://docenti.unimc.it/antonella.pascali/teaching/2018/19055/files/ultima-lezione/harry-potter-and-the-philosophers-stone'; // Replace with the actual URL or path

  const {id} =useParams()
  const [title, setTitle]=useState("")

  useEffect(()=>{
    axios.get(`http://localhost:5555/book/${id}`)
    .then((res)=>{
      setTitle(res.data.title);
    }).catch((err)=>{
      console.log(err);
    })
  },[id])

  return (
    <div className='flex flex-col items-center'>
      <h2>{title}</h2>
      <PdfReader pdfUrl={pdfUrl} />
    </div>
  );
};

export default ReadBook;
