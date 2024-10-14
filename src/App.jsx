import Navbar from "./components/navbar";
import Skills from "./components/skills";
import { FaArrowRight } from "react-icons/fa";
import Title from "./components/Title";


function App() {
  
  return (
    <main className="w-full bg-[#161512] text-white border-b-gray-400 border-b-2">
        <Navbar/>

        <Title/>

        <Skills/>


    </main>
  );
}

export default App;
