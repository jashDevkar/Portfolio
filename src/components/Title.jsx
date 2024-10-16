import { FaArrowRight } from "react-icons/fa";
import { Cursor, useTypewriter } from "react-simple-typewriter";


function Title({data}) {

    const [text]=useTypewriter({
        words:['Web developer','App developer'],
        loop:{},
      })
  return (
    <section className=" flex justify-center items-center h-[90vh] flex-col text-center border-b-gray-500 border-b-2 mt-[20px]">
          <img src="dp.jpg" className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full object-cover"/>  
          <h1 className="font-Roboto font-semibold text-[16px] md:text-[28px] w-[40%] text-center mt-[10px]"><span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">I'm Jash Devkar </span> {text}<Cursor cursorColor="pink"/> </h1>
        
          <div className="md:w-[40%] flex justify-evenly mt-[20px] gap-3 md:gap-0  ">
            <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-e-full rounded-s-full pt-2 pb-2 pl-3 pr-3 text-[12px] md:text-[16px] ">Connect with me</button>
            <button className="rounded-e-full rounded-s-full pt-2 pb-2 pl-3 pr-3 border-gray-400 border-2 text-[12px] md:text-[16px]">My resume</button>
            <button className="flex justify-center items-center gap-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-e-full rounded-s-full pt-2 pb-2 pl-3 pr-3 text-[12px] md:text-[16px]" onClick={data[2]}>About me <FaArrowRight/></button>
          </div>

          {/* <div className=" bg-slate-900 w-[300px] h-full md:absolute right-[10px]  ">

          </div> */}
        </section>
  )
}

export default Title