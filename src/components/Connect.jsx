import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Heading from "../Reusable/Heading";

function Connect({connectRef}) {


  const data = {
    decorated:'Connect',
    text:'Me'
  }

  return (
    <section className="" ref={connectRef}>

      <Heading data={data}/>

      <main className="flex flex-row justify-evenly md:px-20 md:py-10 px-9 pb-7">
        <div className=" hidden flex-col md:w-[45%] px-3 text-justify gap-2  md:flex">
          <h1 className="bg-gradient-to-r from-purple-500  to-orange-500 text-transparent bg-clip-text font-semibold text-4xl font-Poppins">
            Let's talk
          </h1>
          <p>
            I am currently available to do a new porject , so feel free to send me a message about anything that you want me to work on. You can contact anytime
          </p>
          <div className="flex gap-5 mt-4 items-center">
            <MdEmail size={25} />
            <label>jash.devkar1054@gmail.com</label>
          </div>

          <div className="flex gap-5 mt-4 items-center">
          <FaPhoneAlt size={25} />
            <label>9004262865</label>
          </div>

          <div className="flex gap-5 mt-4 items-center">
          <FaLocationDot size={25} />
            <label>Mumbai, Maharashtra</label>
          </div>

          
        </div>

        <div className="flex flex-col md:w-[40%] gap-6 w-full ">

          <section className=" flex flex-col w-ful gap-2">
            <span>Your name</span>
            <input className="bg-[#30343a] outline-none p-3 rounded-sm" placeholder="Enter your name" color="gray"/>
          </section>

          <section className=" flex flex-col w-ful gap-2">
            <span>Your email</span>
            <input className="bg-[#30343a] outline-none p-3 rounded-sm" placeholder="Enter your email" color="gray" type="email"/>
          </section>

          <section className=" flex flex-col w-ful gap-2">
            <span>Your message</span>
            <textarea placeholder="Enter your message" className="bg-[#30343a] outline-none p-3 resize:both; h-[200px]"/>
          </section>

          
        </div>
      </main>
    </section>
  );
}

export default Connect;
