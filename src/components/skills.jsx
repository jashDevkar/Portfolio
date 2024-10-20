import { Tilt } from "react-tilt";
import { mySkills } from "../Data/Data";

const Skills = ({ skillRef }) => {
  const defaultOptions = {
    reverse: true, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  

  return (
    <section ref={skillRef} className="border-b-2 border-gray-500 pb-7">
      <header className="h-[10vh] text-center text-3xl mt-4 font-Pacifico  ">
        Skills
      </header>

      <div className="flex flex-wrap md:gap-10 mb-2 justify-center items-center md:px-7 gap-5">
        {mySkills.map((item, index) => (
          <Tilt options={defaultOptions} key={index}>
            <div
              key={index}
              className="md:w-[200px] w-[170px] md:h-[240px] h-[200px] bg-[#2C2C2C]/95 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-[#D054A0] transition-shadow relative shadow-sm group"
            >
              <div className="  absolute h-full w-full flex justify-center items-center bg-black/35  opacity-0 group-hover:opacity-100 ease-in transition-all duration-300">
                <button className="p-1 hidden group-hover:block rounded-lg  text-white text-[12px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 ">
                  <a href={item.url}>Learn topic</a>
                </button>
              </div>
              <div className=" h-[80%] bg-gray-700 rounded-lg flex items-center justify-center ">
              <img
                src={item.imagePath}
                className="md:w-32  md:h-32 h-28 w-28 rounded-full bg-cover bg-center"
              />
              </div>
              <div className="flex justify-between mt-3 items-center px-2">
                <h1 className=" font-Roboto group-hover:text-[12px] md:group-hover:text-[16px]  ">
                  {item.title}
                </h1>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;
