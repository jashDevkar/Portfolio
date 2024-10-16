import { useState } from "react";
import 'react-icons'
import { IoMenu,IoClose } from "react-icons/io5";



function Navbar({data}) {

  const [open,setOpen]=useState(false);


  let toggleOpen=()=>{
   setOpen(!open)
  }

  return (
    <nav className="flex md:justify-around justify-between px-8 w-full h-[10vh] border-b-gray-500 border-b-2 pt-3 pb-2 items-center   shadow-md bg-[#161512]">
      <h1 className="font-Pacifico text-[32px] bg-gradient-to-r  from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text ">Jash</h1>
      <div className="md:hidden "><IoMenu size={32} onClick={toggleOpen}/></div>
        <ul className={`md:static ${open?'absolute  flex-col bg-slate-900 w-fit right-[30px] top-[30px] pl-4 pr-2 pt-1 py-4 gap-3':'hidden md:md:flex-row md:flex'} h-fit justify-evenly md:w-[40%] md:bg-transparent text-white font-semibold tracking-wide `}>
          <div className={`md:hidden ${open?'flex justify-end ':'hidden'}`} onClick={toggleOpen}><IoClose size={20}/></div>
          <li><button onClick={data[0]} className="nav-link relative">Skills</button></li>
          <li>Contact me</li>
          <li><button onClick={data[1]} className="nav-link relative">Project</button></li>
        </ul>
        {/* <ul className={`md:hidden w-[50%] bg-slate-900 px-4 text-white  ${open?"absolute right-0 mr-2 top-2":"hidden"} p-2 mt-2 rounded`}>
          <li className="flex w-[100%] justify-end"><IoClose size={24} onClick={toggleOpen}/></li>
          <li className="" onClick={data[0]}>Skills</li>
          <li className="mt-2" onClick={data[1]}>Projects</li>
          <li className="mt-2">Projects</li>
        </ul> */}
      <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 pl-3 pr-3 pt-2 pb-2 rounded-e-full rounded-s-full text-center hidden md:block">
        My Apps
      </button>

    </nav>
  );
}

export default Navbar;
