import { FaArrowRight } from "react-icons/fa";
import { Cursor, useTypewriter } from "react-simple-typewriter";


function Title({data}) {

    const [text]=useTypewriter({
        words:['Web developer','App developer'],
        loop:{},
      })
  return (
    <section className=" flex justify-center items-center h-[90vh] flex-col text-center ">
          <img src="images/dp.jpg" className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full  object-cover"/>  
          <h1 className="font-Roboto font-semibold text-[18px] md:text-[28px] w-[40%]
           text-center mt-[10px]"><span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">I'm Jash Devkar </span> {text}<Cursor cursorColor="pink"/> </h1>
        
          <div className="md:w-[40%] flex justify-evenly mt-[20px] gap-3 text-[12px]  ">
            <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-e-full rounded-s-full py-2 px-3  md:text-[16px] " onClick={data[3]}>Connect with me</button>
            <button className="rounded-e-full rounded-s-full pt-2 pb-2 pl-3 pr-3 border-gray-400 border-2 md:text-[16px]">My resume</button>
            <button className="flex justify-center items-center gap-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-e-full rounded-s-full pt-2 pb-2 pl-3 pr-3 text-[12px] md:text-[16px]" onClick={data[2]}>About me <FaArrowRight/></button>
          </div>

          
        </section>
  )
}

export default Title