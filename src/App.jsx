import { Cursor, useTypewriter } from "react-simple-typewriter";
import Navbar from "./components/navbar";
import Skills from "./components/skills";


function App() {
  const [text]=useTypewriter({
    words:['Web developer','App developer'],
    loop:{},
  })
  return (
    <main className="w-full bg-[#161512] text-white border-b-gray-400 border-b-2">
        <Navbar/>

        <section className=" flex justify-center items-center h-[90vh] flex-col text-center border-b-gray-500 border-b-2">
          <img src="dp.jpg" className="w-[200px] h-[200px] rounded-full object-cover"/>  
          <h1 className="font-Roboto font-semibold text-[16px] md:text-[28px] w-[40%] text-center mt-[10px]"><span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">I'm Jash Devkar </span> {text}<Cursor cursorColor="pink"/> </h1>
        
          <div className="md:w-[40%] flex justify-evenly mt-[20px] gap-3 md:gap-0  ">
            <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-e-full rounded-s-full pt-2 pb-2 pl-3 pr-3 ">Connect with me</button>
            <button className="rounded-e-full rounded-s-full pt-2 pb-2 pl-3 pr-3 border-gray-400 border-2">My resume</button>
          </div>
        </section>

        <Skills/>


    </main>
  );
}

export default App;
