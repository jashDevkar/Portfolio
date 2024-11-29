import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Heading from "../Reusable/Heading";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Connect({ connectRef }) {
  const data = {
    decorated: "Connect",
    text: "Me",
  };

  const successToast = () => toast.success("Email sent succesfully!",{
    position:"top-right",
    theme:'dark'
  });

  const failureToast=()=>toast.error("Something went wrong",{
    position:'top-right'
  })

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");


  const handleFormSubmit=(e)=>{
    e.preventDefault();

    try{
        console.log('hello')
    }

    catch(error){
      failureToast();
    }

  
  }

  return (
    <section className="" ref={connectRef}>
      <Heading data={data} />
      <ToastContainer/>

      <main className="flex md:flex-row flex-wrap justify-evenly md:px-20 md:py-10 px-9 pb-7">
        <div className=" flex-col md:w-[45%]  text-justify gap-2 flex md:px-3 mb-10">
          <h1 className="bg-gradient-to-r from-purple-500  to-orange-500 text-transparent bg-clip-text font-semibold text-4xl font-Poppins">
            Let's talk
          </h1>
          <p>
            I am currently available to do a new porject , so feel free to send
            me a message about anything that you want me to work on. You can
            contact anytime
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
          <div className="flex gap-5 mt-4 items-center">
            
            <label>Connect me form section is under development, but still you can send me email</label>
          </div>
        </div>

        <form className="flex flex-col md:w-[40%] gap-6 w-full " onSubmit={handleFormSubmit}>
          <section className=" flex flex-col w-ful gap-2">
            <span>Your name</span>
            <input
              className="bg-[#30343a] outline-none p-3 rounded-sm"
              placeholder="Enter your name"
              color="gray"
              value={name}
              required
              onChange={(e)=>setName(e.target.value)}
            />
          </section>

          <section className=" flex flex-col w-ful gap-2">
            <span>Your email</span>
            <input
              className="bg-[#30343a] outline-none p-3 rounded-sm"
              placeholder="Enter your email"
              color="gray"
              type="email"
              value={email}
              required
              onChange={(e)=>setEmail(e.target.value)}
            />
          </section>

          <section className=" flex flex-col w-ful gap-2">
            <span>Your message</span>
            <textarea
              placeholder="Enter your message"
              className="bg-[#30343a] outline-none p-3 resize:both; h-[200px]"
              value={message}
              required
              onChange={(e)=>setMessage(e.target.value)}
            />
          </section>
          <button className="w-full border-2 border-gray-500 p-2 hover:bg-green-500 hover:border-green-500 rounded-sm" type="submit">
            submit
          </button>

        </form>
      </main>
    </section>
  );
}

export default Connect;
