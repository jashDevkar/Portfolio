import Slider from "react-slick";
import { myProjects } from "../Data/Data";
import { FaArrowRight, FaBook } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import Heading from "../Reusable/Heading";
import { Link } from "react-router-dom";
import Description from "../Description/Description";
import { useState } from "react";

function Projects({ projectRef }) {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 5,
        },
      },
      
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [openDes,setOpenDes]=useState(false)
  const [name,setName]=useState("")

  const toggleDescription=(Name)=>{
    if(openDes){
      if(name === Name ){

        return
      }
      else{
        setName(Name)
      }
    }
    else{
      setOpenDes(val=>!val);
      setName(Name);
    }
  }

  const closeDes=()=>{
    setOpenDes(false)
  }

  const data = {
    decorated:'My',
    text:'projects'
  }

  return (
    <section
      className="flex justify-center items-center flex-col"
      ref={projectRef}
    >
     <Heading data={data}/>

      <div className=" mb-2 px-10  w-full ">
        <Slider {...settings}>
          {myProjects.map((item) => (
            <div
              key={item.id}
              className="w-[170px] h-[250px]  bg-[#2C2C2C]/50 backdrop-blur-sm rounded-sm cursor-pointer  relative shadow-sm group flex flex-col text-center  "
            >
              <div className="flex flex-col justify-center w-full items-center  py-6 bg-gradient-to-tr from-black/80 via-slate-900/80 to-gray-800/80 backdrop-blur-md rounded-sm ">
                {item.comp}
              </div>
              <div className="flex flex-col gap-3 pt-2 font-Poppins">
                <h1 className="text-center font-semibold font-Poppins">
                  {item.title}
                </h1>

                <div className=" flex justify-evenly mt-[10px] gap-3 text-[12px]">
                  <button className="bg-transparent border-2 rounded-e-full rounded-s-full py-2 px-3 hover:tracking-widest " onClick={()=>toggleDescription(item.title)}>
                    show more
                  </button>
                  <button
                    className=" bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-e-full rounded-s-full pt-2 pb-2 pl-3 pr-3  "
                  >
                    <a href={item.url} className="flex justify-center items-center gap-2">Source code <FaArrowRight /></a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {
        openDes?
        <Description name={name} fun={closeDes}/>
        :
        null
      }
    </section>
  );
}

export default Projects;

// hover:shadow-[#D054A0]
