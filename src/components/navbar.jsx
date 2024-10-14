import { useState } from "react";
import 'react-icons'
import { IoMenu,IoClose } from "react-icons/io5";


function Navbar() {

  const [open,isOpen]=useState(false);


  let toggleOpen=()=>{
   isOpen(!open)
  }

  return (
    <nav className="flex justify-around w-full h-[10vh] border-b-gray-400 border-b-2 pt-3 pb-2 items-center">
      <h1 className="font-Pacifico text-[24px] bg-gradient-to-r  from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">Jash</h1>
      <div className="md:hidden "><IoMenu size={24} onClick={toggleOpen}/></div>
        <ul className={`hidden md:flex h-fit justify-around w-[40%] bg-white md:bg-transparent text-black md:text-white `}>
          <li>Home</li>
          <li>Contact me</li>
          <li>Projects</li>
        </ul>
        <ul className={`md:hidden h-fit justify-around w-[40%] bg-slate-900  text-white  ${open?"absolute right-0 mr-2 top-2":"hidden"} p-2 mt-2 rounded`}>
          <li className="flex w-[100%] justify-end"><IoClose size={24} onClick={toggleOpen}/></li>
          <li className="">Home</li>
          <li className="mt-2">Contact me</li>
          <li className="mt-2">Projects</li>
        </ul>
      <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 pl-3 pr-3 pt-2 pb-2 rounded-e-full rounded-s-full text-center hidden md:block">
        My Apps
      </button>

    </nav>
  );
}

export default Navbar;
