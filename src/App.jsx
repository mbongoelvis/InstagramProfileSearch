import React from "react";
import { Showuser } from "./components/Showuser";

function App() {
  return (
    <div className="w-full h-screen bg-gray-900  flex items-center justify-center">
      <div className="w-[95%] md:w-[70%] lg:w-1/3 h-[70%]">
        <Showuser />
      </div>
    </div>
  );
}

export default App
