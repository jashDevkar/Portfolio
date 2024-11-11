import Heading from "../Reusable/Heading";

function AboutMe({ aboutRef }) {


  const data = {
    decorated:'About',
    text:'Me'
  }

  return (
    <section ref={aboutRef} className="md:px-28  px-4 transition-all duration-700 ease-in-out">
      <Heading data={data}/>
      <div className="flex flex-col">
      
          <p className="text-justify  backdrop-blur-[4px] text-pretty  font-Lora">
           I am Jash, a computer engineer student. I am a keen learner , i built my foundation in coding by learning programing languages such as C , Java , C++ and JavaScript.
           I am proficient in frameworks such as React , Django ,React-Native and flutter. I have a very good foundation and knowledge in cross-platform or native app development.
           I built my very first app called "NotesSphere" using React-Native which helps students to view notes. I have a also integrated cloud computing service such as Firebase i my app.
           In this portfolio you can see all my skills and projects which i have built using different frameworks. Feel free to connect with me if interested!
          </p>   
      </div>
    </section>
  );
}

export default AboutMe;
