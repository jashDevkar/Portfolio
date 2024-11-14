import { useState } from "react";
import "react-icons";
import { IoMenu, IoClose } from "react-icons/io5";

function Navbar({ data }) {
  const [open, setOpen] = useState(false);

  let toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <nav
      className={`flex md:justify-around  justify-between px-11 w-full  border-b-gray-500 border-b-2 py-3  items-center shadow-md bg-[#161512]/50  backdrop-blur-sm relative ${
        open ? "" : "overflow-x-clip "
      }`}
    >
      <h1 className="font-Pacifico text-[32px]  bg-gradient-to-r  from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text cursor-pointer">
        <a>Jash</a>
      </h1>
      {open ? null : (
        <div className="md:hidden ">
          <IoMenu size={32} onClick={toggleOpen} />
        </div>
      )}
      <ul
        className={` hidden md:static md:flex flex-row h-fit justify-evenly md:w-[40%] md:bg-transparent text-white font-semibold tracking-wide overflow-hidden`}
      >
        <div
          className={`md:hidden ${open ? "flex justify-end " : "hidden"}`}
          onClick={toggleOpen}
        >
          <IoClose size={20} />
        </div>
        <li>
          <button onClick={data[0]} className="nav-link relative">
            Skills
          </button>
        </li>
        <li>
          <button onClick={data[1]} className="nav-link relative">
            Project
          </button>
        </li>
        <li>
          <button onClick={data[3]} className="nav-link relative">
            Connect me
          </button>
        </li>
      </ul>

      <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 pl-3 pr-3 pt-2 pb-2 rounded-e-full rounded-s-full text-center hidden md:block">
        My Apps
      </button>

      <div
        className={`top-2 gap-7 flex flex-col pl-4 pb-4 pr-2 pt-2 w-[50%] h-[29vh] z-20 md:hidden ${
          open ? "right-2 absolute" : "right-[-200px] absolute"
        } rounded bg-gradient-to-br from-[#0e0c0b] via-[#221f1d]/95 to-[#2d2a28]/90 backdrop-blur-xl transition-all ease-in-out duration-1000`}
      >
        <span className="flex w-[100%] justify-end h-fit">
          <IoClose size={24} onClick={toggleOpen} />
        </span>

        <ul className="gap-3 flex flex-col">
          <li className="" onClick={data[0]}>
            Skills
          </li>
          <li onClick={data[1]}>
            Projects
          </li>
          <li  onClick={data[3]}>
            Connect me
          </li>
          <li className="mt-3">
            <div className="border-[1px] border-gray-600"/>
          </li>
          <li>
            My apps
          </li>
          <li>
            My Resume
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
