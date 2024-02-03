import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="w-full h-screen bg-gray-900  flex items-center justify-center">
      <div className="w-1/3 h-[70%] bg-indigo-950">
        <Navbar />
      </div>
    </div>
  );
}

export default App
