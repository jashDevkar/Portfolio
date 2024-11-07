import Navbar from "./components/navbar";
import Skills from "./components/skills";
import Title from "./components/Title";
import ParticlesComponent from "./Particles/Particles";
import './App.css'
import { useRef } from "react";
import Projects from "./components/Projects";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutMe from "./components/About";
import Connect from "./components/Connect";



function App() {


  const skillRef = useRef(null);
    const projectRef = useRef(null);
    const aboutRef = useRef(null);
    const connectRef = useRef(null);
  
    const handleScroll=()=>{
      if(skillRef.current){
        skillRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  
    const handleProjectScroll=()=>{
      if(projectRef.current){
        projectRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  
    const handleAboutScroll=()=>{
      if(aboutRef.current){
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    const handleConnectScroll=()=>{
      if(connectRef.current){
        connectRef.current.scrollIntoView({behavior:'smooth'});
      }
    }


  
  return (
    <main className="w-full bg-transparent text-white border-b-gray-400 border-b-2 transition-all duration-700 ease-in-out ">
    <ParticlesComponent  id='particles'/>
      <Navbar data={[handleScroll,handleProjectScroll,handleAboutScroll,handleConnectScroll]}/>

      <Title data={[handleScroll,handleProjectScroll,handleAboutScroll,handleConnectScroll]}/>

      <AboutMe aboutRef={aboutRef}/>

      <Skills skillRef ={skillRef}/>

      <Projects projectRef={projectRef}/>

      <Connect connectRef={connectRef}/>
      
  </main>
  );
}

export default App;
