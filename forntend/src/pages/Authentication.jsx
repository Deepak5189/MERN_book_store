// import React from 'react'

import { useState } from "react"

const Authentication = () => {
  const [newUser, setNewUser] = useState(false);
  const[loginDetail, setLoginDetail] = useState({});
  const[registerDetail, setRegisterDetail] = useState({});

  const handleNewUser=(e)=>{
    e.preventDefault()
    // const bool = newUser
    setNewUser(!newUser)
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(newUser){
      const email=e.target[0].value;
      const username=e.target[1].value;
      const password=e.target[2].value;
      // if()
      setRegisterDetail({email, username, password});
      console.log(registerDetail);
    }
    else {
      const email=e.target[0].value;
      // const username=e.target[1].value;
      const password=e.target[1].value;
      // if()
      setLoginDetail({email, password});
      console.log(loginDetail);
    }
    
  }

  return (
    <div className="p-2 mt-5 flex justify-center items-center bg-gray-300/70 rounded-xl w-[60%] m-auto">
      <div className="flex flex-col gap-10 p-10 border-r-2 border-gray-500">
        <h1 className="text-3xl font-bold">Unlock the Magic</h1>
        <h3 className="text-xl font-semibold text-right">of Reading with us.</h3>
        <h3 className="font-semibold">Why should join us?.....Here is Why</h3>
        <ul className="list-disc">
          <li>Embark on a litrary journey!</li>
          <li>Curated Collections for Every Book Lover.</li>
          <li>More than just books - It&apos;s a Reading Experience.</li>
          <li>Fuel your Mind with the power of Books.</li>
          <li>Curious Minds Welcome.</li>
        </ul>
      </div>
      {newUser? <div className="bg-gray-300/70 p-10 m-5 rounded-lg flex flex-col items-center">
          <h2 className="text-xl font-bold">Hello There.....</h2>
          <form className="flex flex-col gap-3 mt-5 items-center" onSubmit={handleSubmit}>
            <span>
              <h3 className="text-md">Email</h3>
              <input type="email" className="bg-transparent outline outline-2 outline-gray rounded-lg my-2 text-sm p-2 text-black" placeholder="Enter Your Email...."/>
            </span>
            <span>
              <h3 className="text-md">Username</h3>
              <input type="text" className="bg-transparent outline outline-2 outline-gray rounded-lg my-2 text-sm p-2 text-black" placeholder="Enter a username...."/>
            </span>
            {/* <span className="flex"> */}
              <span>
                <h3 className="text-md">Password</h3>
                <input type="password" className="bg-transparent outline outline-2 outline-gray rounded-lg my-2 text-sm p-2 text-black" placeholder="Enter a Password...."/>
              </span>
              <span>
                <h3 className="text-md">Confirm Password</h3>
                <input type="password" className="bg-transparent outline outline-2 outline-gray rounded-lg my-2 text-sm p-2 text-black" placeholder="confirm Password...."/>
              </span>
            {/* </span> */}
            <span className="flex gap-5">
              <button className="px-5  py-2 bg-blue-300 rounded-2xl outline-gray-700 font-semibold hover:text-white hover:bg-black outline outline-2">Login</button>
              <button className="px-5  py-2 bg-black text-white rounded-2xl outline outline-black font-semibold hover:text-black hover:bg-blue-300 hover:outline-gray-700 hover:outline-2">Google Login</button>
            </span>
            <span className="flex gap-2">
              <p className="">Already a member?....</p>
              <button onClick={handleNewUser} className="text-blue-700">Login now</button>
            </span>
          </form>
        </div> :
        <div className="bg-gray-300/70 p-10 m-5 rounded-lg flex flex-col items-center">
        <h2 className="text-xl font-bold">Welcome Back.....</h2>
        <form className="flex flex-col gap-3 mt-5 items-center" onSubmit={handleSubmit}>
          <span>
            <h3 className="text-md">Email</h3>
            <input type="email" className="bg-transparent outline outline-2 outline-gray rounded-lg my-2 text-sm p-2 text-black" placeholder="Enter Your Email...."/>
          </span>
          <span>
            <h3 className="text-md">Password</h3>
            <input type="password" className="bg-transparent outline outline-2 outline-gray rounded-lg my-2 text-sm p-2 text-black" placeholder="Enter Your Password...."/>
          </span>
          <span className="flex gap-5">
            <button className="px-5  py-2 bg-blue-300 rounded-2xl outline-gray-700 font-semibold hover:text-white hover:bg-black outline outline-2">Login</button>
            <button className="px-5  py-2 bg-black text-white rounded-2xl outline outline-black font-semibold hover:text-black hover:bg-blue-300 hover:outline-gray-700 hover:outline-2">Google Login</button>
          </span>
          <span className="flex gap-2">
            <p className="">New Here?....</p>
            <button onClick={handleNewUser} className="text-blue-700">Create new account</button>
          </span>
        </form>
      </div>}
    </div>
  )
}

export default Authentication