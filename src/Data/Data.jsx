import { FaBook,FaUser } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa6";
import { IoFastFood,IoLogoFirebase } from "react-icons/io5";



const myProjects=[
    {title:'Notes Sphere',url:'https://react.dev/learn',des:'Android/ios application',comp:<FaBook size={80}/>},
    {title:'Desert ordering',url:'https://github.com/jashDevkar/Desert-ordering.git',des:'Django website',comp:<IoFastFood size={80} />},
    {title:'User-firebase',url:'https://github.com/jashDevkar/User-Firebase.git',des:'An Alternative of todo',comp:<IoLogoFirebase  size={80}/>   },
    {title:'Calculator',url:'https://github.com/jashDevkar/React-Calculator.git',des:'A simple calculator',comp:<FaCalculator size={80}/>},
    {title:'Portfolio',url:'https://github.com/jashDevkar/Portfolio.git',des:'Source code of this project',comp:<FaUser size={80}/>}
]


const mySkills = [
    
    {
      title: "React Native",
      imagePath: 'src/assets/images/react.jpg',
      url: "https://reactnative.dev/docs/environment-setup",
    },
    {
      title: "Django",
      imagePath: "src/assets/images/python.jpg",
      url: "https://docs.djangoproject.com/en/5.1/",
    },
    {
      title: "Flutter",
      imagePath: "src/assets/images/flutter.png",
      url: "https://flutter.dev/learn",
    },
    { title: "Javascript",
       imagePath: "src/assets/images/js.jpg",
        url: "https://nodejs.org/en" },
    {
      title: "Java",
      imagePath: "src/assets/images/java.jpg",
      url: "https://reactnative.dev/docs/environment-setup",
    },
    {
      title: "C++",
      imagePath: "src/assets/images/c++.jpg",
      url: "https://reactnative.dev/docs/environment-setup",
    },
  ];


export {myProjects,mySkills};