import { FaBook,FaUser } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa6";
import { FcTodoList } from "react-icons/fc";
import { IoFastFood,IoLogoFirebase } from "react-icons/io5";



const myProjects=[
    {title:'Notes Sphere',url:'https://react.dev/learn',des:'Android/ios application',comp:<FaBook size={80}  />    },
    {title:'Desert ordering',url:'https://github.com/jashDevkar/Desert-ordering.git',des:'Django website',comp:<IoFastFood size={80} />},
    {title:'User-firebase',url:'https://github.com/jashDevkar/User-Firebase.git',des:'An Alternative of todo',comp:<IoLogoFirebase  size={80}/>   },
    {title:'Portfolio',url:'https://github.com/jashDevkar/Portfolio.git',des:'Source code of this project',comp:<FaUser size={80}/>},
    {title:'Todo',url:'https://github.com/jashDevkar/My-Todo.git',des:'A flutter todo app',comp:<FcTodoList size={80} color="white" />},

]


const mySkills = [
    
    {
      title: "React Native",
      imagePath: '/images/react.jpg',
      url: "https://reactnative.dev/docs/environment-setup",
    },
    {
      title: "Django",
      imagePath: "images/python.jpg",
      url: "https://docs.djangoproject.com/en/5.1/",
    },
    {
      title: "Flutter",
      imagePath: "images/flutter.png",
      url: "https://flutter.dev/learn",
    },
    { title: "Javascript",
       imagePath: "images/js.jpg",
        url: "https://nodejs.org/en" },
    {
      title: "Java",
      imagePath: "images/java.jpg",
      url: "https://reactnative.dev/docs/environment-setup",
    },
    {
      title: "C++",
      imagePath: "images/c++.jpg",
      url: "https://reactnative.dev/docs/environment-setup",
    },
  ];


  const orangeGradient = "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"

export {myProjects,mySkills,orangeGradient};