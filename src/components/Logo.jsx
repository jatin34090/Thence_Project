import React from 'react'
import LogoImage from "../assets/Logo.png";

const Logo = () => {
  return (
    <div className=" mx-8 mt-6 mb-4 w-32 h-12 ">
        <img
          className=" w-31 h-8 mx-2 my-2 text-gray-800 text-opacity-100"
          src={LogoImage}
          alt=""
        />
      </div>
  )
}

export default Logo