import { Tilt } from "react-tilt";
import { mySkills } from "../Data/Data";
import Heading from "../Reusable/Heading";

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

  const data = {
    decorated:'My',
    text:'skills'
  }

  return (
    <section ref={skillRef} className="transition-all duration-700 ease-in-out">
     <Heading data={data}/>

      <div className="flex flex-wrap md:gap-[30px] gap-3 justify-center md:px-2 px-1 ">
        {mySkills.map((item, index) => (
          <Tilt options={defaultOptions} key={index}>
            <div className="md:w-[350px] w-[180px] md:h-[250px] h-[150px] hover:p-[3px] rounded-sm bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 backdrop-blur-[2px] cursor-pointer relative group overflow-hidden">
              <div
                className="w-full h-full absolute bg-black/80  left-[-50px] opacity-0 group-hover:opacity-100  group-hover:left-0 top-0 duration-[1.5s] transition-all flex justify-center items-center 
               rounded-sm"
              >
                <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-1 rounded-sm transition-all duration-500 ">
                  <a href={item.url}>Learn more</a>
                </button>
              </div>
              <img
                src={item.imagePath}
                className="w-full h-full bg-transparent bg-center bg-cover "
              />
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;
