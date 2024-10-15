import Navbar from "./components/navbar";
import Skills from "./components/skills";
import Title from "./components/Title";
import ParticlesComponent from "./Particles/Particles";
import './App.css'
import { useRef } from "react";
import Projects from "./components/Projects";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {

  const skillRef = useRef(null);
  const projectRef = useRef(null)

  const handleScroll=()=>{
    if(skillRef.current){
      skillRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if(projectRef.current){
      projectRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  return (
    <main className="w-full bg-transparent text-white border-b-gray-400 border-b-2">
      <ParticlesComponent  id='particles'/>
        <Navbar handleScroll={handleScroll}/>

        <Title/>

        <Skills skillRef ={skillRef}/>

        <Projects projectRef={projectRef}/>


    </main>
  );
}

export default App;
