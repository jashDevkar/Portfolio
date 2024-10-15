

const Skills=({skillRef})=> {


    const myCards=[
        {title:'React js',imagePath:'Reactjs.png',url:'https://react.dev/learn'},
        {title:'React Native',imagePath:'Reactjs.png',url:'https://reactnative.dev/docs/environment-setup'},
        {title:'Django',imagePath:'python.jpg',url:'https://docs.djangoproject.com/en/5.1/'},
        {title:'Flutter',imagePath:'flutter.png',url:'https://flutter.dev/learn'},
        {title:'Node js',imagePath:'Nodejs.png',url:'https://nodejs.org/en'}
    ]

  return (
    <section ref={skillRef} className="border-b-2 border-gray-500 pb-7">
        <header className="h-[10vh] text-center text-4xl mt-4 font-semibold ">Skills</header>

        <div className="flex flex-wrap gap-10 mb-2 justify-center items-center md:px-7">

            {
                myCards.map((item,index)=>(
                    <div key={index} className="md:w-[230px] w-[235px] h-[260px] bg-[#2C2C2C] rounded-lg cursor-pointer hover:shadow-lg hover:shadow-[#D054A0] transition-shadow relative group shadow-sm" >
                    
                        <img src={item.imagePath} className="md:w-[230px] w-[235px] h-[210px] rounded-lg"/>
                        <div className="flex justify-between mt-3 items-center px-2">
                         <h1 className="font-bold font-Roboto ">{item.title}</h1>
                         <button className="p-1 hidden group-hover:block  rounded-lg  text-white text-[12px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 "><a href={item.url}>Learn topic</a></button>
                        </div>
                    </div>
                ))
            }

        </div>
    </section>
  )
}

export default Skills;