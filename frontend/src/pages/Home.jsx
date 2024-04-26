// import React from 'react'

import SideBar from "../components/SideBar";
import ShowBooks from "./ShowBooks";

const Home = ({genres}) => {
  return (
    <div className="mx-10">

      {/* Hero Section */}
      <div className="px-24 mt-10 m-auto flex gap-20 justify-around bg-white shadow-lg border-2 rounded-xl">
        {/* <img src="/landing_group.svg" alt="" className="absolute w-[600px]"/> */}
        <div className="flex flex-col gap-5 m-auto flex-1">
          <h1 className="text-3xl font-bold">Welcome to Book Mania</h1>
          <h3 className="text-xl"> your one-stop destination for all your reading needs.</h3>
          <h3 className="text-xl"> Start your reading adventure today with Book Mania, <br /> the ultimate online book store for book lovers.</h3>
        </div>
        <div className="flex-1 my-10">
          <img src="/landing_group.svg" alt="Books" className="w-[90%] rounded-full"/>
        </div>
      </div>
      <div className="flex gap-5 mt-10">
      {/* side Bar */}
        <div className="min-w-[20%] shadow-xl h-full">
          <SideBar genres={genres}/>
        </div>
        <div className="flex-1">
          <ShowBooks/>
        </div>
        {/* <div className="p-10">

        </div> */}
      </div>
    </div>
  )
}

export default Home;