// import React from 'react'

import { useState } from "react"

const SideBar = () => {

  const [isGenre, setIsGenre] = useState(false);

  const handleGenre=()=>{
    setIsGenre(!isGenre);
  }
  return (
    <div className="bg-gray-300/70 w-full  h-auto p-3 rounded-lg">
      <h3 className="font-bold text-xl" onClick={handleGenre}>Genre</h3>
      {isGenre && <div>
        
      </div>}
    </div>
  )
}

export default SideBar