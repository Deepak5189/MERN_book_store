// import React from 'react'

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Authentication = () => {
  const navigate=useNavigate();
  // const [loginFormData, setLoginFormData]=useState({
  //   email:'',
  //   password:'',
  // })
  const [formData, setFormData]=useState({
    username:'',
    gmail:'',
    password:'',
    confirmPassword:''
  })

  const{login, register}=useAuth()

  const{username, gmail, password, confirmPassword}=formData;

  const handleChange=(event)=>{
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  const [newUser, setNewUser]=useState(false);

  const handleUser=()=>{
    setNewUser(!newUser)
  }

  // const {email, password}=loginFormData;

  // const handleLoginChange=(event)=>{
  //   setLoginFormData({...loginFormData, [event.target.name]:event.target.value});
  // }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const {gmail, password}=formData;
    console.log(formData)
    const userData={gmail, password};

    try {
      const response = await login(userData);
      // const token=localStorage.getItem('token')
      alert(`user ${response.user.username} has logged in`);
        navigate('/');

    } catch (error) {
      console.error(error, 'got an error due to server');
    }
  };


  const handleSubmitNewUser = async (event) => {
    event.preventDefault();

    // try {
    //   // Replace with your actual login logic (e.g., API call)
    //   const response = await fetch('/api/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });

    //   if (!response.ok) {
    //     throw new Error('Login failed');
    //   }

    //   const data = await response.json();
    //   setAuthContext({ isAuthenticated: true, token: data.token }); // Update AuthContext
    //   navigate('/'); // Redirect to home page on successful login
    // } catch (error) {
    //   console.error(error);
    //   Display error message to user
    // }
  };  


  return (
    <main className="p-10 m-auto flex justify-center items-center">
      <img src="/landing_page.jpeg" alt="" className="h-screen w-screen fixed bottom-0 z-[0]"/>
      <div className="bg-gray-200 z-[1] p-10 rounded-lg shadow-xl box-border min-w-[350px]">
        <div className="flex justify-center items-center rounded-full border-[2px] m-auto border-gray-300 p-2 w-20 h-20">
          <span className="text-5xl font-bold">B</span>
          <span className="text-4xl font-thin">M</span>
        </div>
        {!newUser?<form onSubmit={handleSubmit} className="w-full flex flex-col gap-5 mt-5">
          <div className="text-xl uppercase font-semibold text-center">User Login</div>
          <div className="flex flex-col w-full">
          </div>
          <div className="flex flex-col w-full">
            {/* <label htmlFor="email"className="text-lg ">Email</label> */}
            <input
              type="email"
              placeholder="Email"
              id="gmail"
              name="gmail"
              className="block p-2 rounded-lg shadow-lg focus:scale-105 focus:outline-none transition-transform"
              value={gmail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="">
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="password"
              id="password"
              name="password"
              className="block p-2 rounded-lg shadow-lg w-full focus:scale-105 focus:outline-none transition-transform"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <button type="submit" className="box-border px-4 py-2 shadow-lg rounded-lg bg-gray-800 text-white hover:scale-105 transition-transform">Login</button>
            <div className="form-group">
              <Link to="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</Link>
            </div>
          </div>
          <hr className="bg-gray-500 h-[1px]"/>
          <div className="flex gap-1">
            <span>New here?........... </span>
            <Link to="#" className="text-blue-500 hover:underline" onClick={handleUser}>Create a new account</Link>
          </div>
        </form>:
        <form onSubmit={handleSubmitNewUser} className="w-full flex flex-col gap-5 mt-5">
        <div className="text-xl uppercase font-semibold text-center">User Register</div>
            {/* <label htmlFor="email"className="text-lg ">Email</label> */}
            <input
              type="text"
              placeholder="Username"
              id="username"
              name="username"
              className="block p-2 rounded-lg shadow-lg focus:scale-105 focus:outline-none transition-transform"
              value={username}
              onChange={handleChange}
              required
            />
        <div className="flex flex-col w-full">
          {/* <label htmlFor="email"className="text-lg ">Email</label> */}
          <input
            type="email"
            placeholder="Email"
            id="gmail"
            name="gmail"
            className="block p-2 rounded-lg shadow-lg focus:scale-105 focus:outline-none transition-transform"
            value={gmail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="">
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            id="password"
            name="password"
            className="block p-2 rounded-lg shadow-lg w-full focus:scale-105 focus:outline-none transition-transform"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="">
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="block p-2 rounded-lg shadow-lg w-full focus:scale-105 focus:outline-none transition-transform"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <button type="submit" className="box-border px-4 py-2 shadow-lg rounded-lg bg-gray-800 text-white hover:scale-105 transition-transform">Register</button>
          {/* <div className="form-group">
            <Link to="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</Link>
          </div> */}
        </div>
        <hr className="bg-gray-500 h-[1px]"/>
        <div className="flex gap-2">
          <span>Already a User?........... </span>
          <Link to="#" className="text-blue-500 hover:underline" onClick={handleUser}>Login</Link>
        </div>
      </form>}
      </div>
    </main>
  )
}

export default Authentication