import React from 'react'
import { FiSearch } from "react-icons/fi";

export const SearchBar = () => {
  return (
    <div className="w-full bg-blue-950 min-h-5 flex px-4 py-2 gap-2 items-center mt-12 rounded-lg">
      <FiSearch className="text-4xl text-blue-500 font-thin" />
      <input
        type="text"
        placeholder="Search Instagram Username...."
        className="w-full outline-none border-none bg-transparent text-white placeholder:text-white"
      />
      <button className="bg-blue-500 px-6 text-white py-3 rounded-xl">
        Search
      </button>
    </div>
  );
}
