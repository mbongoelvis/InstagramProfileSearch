import React from 'react'
import {FaSun} from "react-icons/fa";


export const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <p className="text-white text-xl font-semibold">InstaSearch</p>
      <div className='flex items-center gap-3'>
        <p className="text-white text-md font-semibold">LIGHT</p>
        <FaSun className='text-white text-2xl cursor-pointer'/>
      </div>
    </div>
  );
}
