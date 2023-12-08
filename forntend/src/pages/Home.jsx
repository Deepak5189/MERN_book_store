// import React from 'react'

import SideBar from "../components/SideBar";
import ShowBooks from "./ShowBooks";

const Home = () => {
  return (
    <div className=" m-10">

      {/* Hero Section */}
      <div className="px-20 m-10 flex gap-20 justify-around bg-gray-300/70 rounded-xl">
        <div className="flex flex-col gap-5 mt-24 flex-1">
          <h1 className="text-3xl font-bold">Welcome to Book Mania</h1>
          <h3 className="text-xl"> your one-stop destination for all your reading needs.</h3>
          <h3 className="text-xl"> Start your reading adventure today with Book Mania, <br /> the ultimate online book store for book lovers.</h3>
        </div>
        <div className="flex-1 my-10">
          <img src="/public/book_store.jpg" alt="Books" className="w-[90%] rounded-full"/>
        </div>
      </div>
      <div className=" flex gap-5">
      {/* side Bar */}
        <div className="w-[30vw]">
          <SideBar/>
        </div>
        <div className="">
          <ShowBooks/>
        </div>
        <div className="p-10">

        </div>
      </div>
    </div>
  )
}

export default Home;