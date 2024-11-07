import { useState } from "react";
import 'react-icons'
import { IoMenu,IoClose } from "react-icons/io5";



function Navbar({data}) {

  const [open,setOpen]=useState(false);


  let toggleOpen=()=>{
   setOpen(!open)
  }

  return (
    <nav className="flex md:justify-around justify-between px-11 w-full  border-b-gray-500 border-b-2 py-3  items-center shadow-md bg-[#161512]/50  backdrop-blur-sm">
      <h1 className="font-Pacifico text-[32px]  bg-gradient-to-r  from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text cursor-pointer"><a>Jash</a></h1>
      {
        open?
        null:
        <div className="md:hidden "><IoMenu size={32} onClick={toggleOpen}/></div>
      }
        <ul className={` hidden md:static md:flex flex-row h-fit justify-evenly md:w-[40%] md:bg-transparent text-white font-semibold tracking-wide `}>
          <div className={`md:hidden ${open?'flex justify-end ':'hidden'}`} onClick={toggleOpen}><IoClose size={20}/></div>
          <li><button onClick={data[0]} className="nav-link relative">Skills</button></li>
          <li><button onClick={data[1]} className="nav-link relative">Project</button></li>
          <li><button onClick={data[3]} className="nav-link relative">Connect me</button></li>
        </ul>
        <ul className={`md:hidden w-[40%] mr-5 px-4 text-white  ${open?"absolute right-0 mr-2 top-2":"hidden"} py-3 mt-2 rounded bg-gradient-to-r from-black via-slate-900 to-gray-800`}>
          <li className="flex w-[100%] justify-end"><IoClose size={24} onClick={toggleOpen}/></li>
          <li className="" onClick={data[0]}>Skills</li>
          <li className="mt-2" onClick={data[1]}>Projects</li>
          <li className="mt-2" onClick={data[3]}>Connect me</li>
        </ul>
      <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 pl-3 pr-3 pt-2 pb-2 rounded-e-full rounded-s-full text-center hidden md:block">
        My Apps
      </button>

    </nav>
  );
}

export default Navbar;
