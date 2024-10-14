

function Skills() {


    const myCards=[
        {title:'React js',imagePath:'Reactjs.png',url:'https://react.dev/learn'},
        {title:'React Native',imagePath:'Reactjs.png',url:'https://reactnative.dev/docs/environment-setup'},
        {title:'Django',imagePath:'python.jpg',url:'https://docs.djangoproject.com/en/5.1/'},
        {title:'Flutter',imagePath:'flutter.png',url:'https://flutter.dev/learn'},
        {title:'Node js',imagePath:'Nodejs.png',url:'https://nodejs.org/en'}
    ]

  return (
    <section >
        <header className="h-[10vh] text-center text-4xl mt-4 font-semibold">Skills</header>

        <div className="flex flex-wrap gap-10 mb-2 justify-center items-center md:px-7">

            {
                myCards.map((item,index)=>(
                    <div key={index} className="md:w-[220px] w-[230px] h-[250px] bg-[#2C2C2C] rounded-lg cursor-pointer hover:shadow-lg hover:shadow-[#D054A0] transition-shadow relative group shadow-sm" >
                        <div className="absolute bg-black/40 group-hover:h-full h-[80%] flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:bottom-0 group-hover:w-full transition-all duration-300">
                            <button className="p-2 hidden group-hover:block transition-all duration-500  rounded-lg bg-gradient-to-r  from-purple-500 via-pink-500 to-orange-500  text-white"><a href={item.url}>Learn topic</a></button>
                        </div>
                        <img src={item.imagePath} className="md:w-[220px] w-[230px] h-[210px] rounded-lg"/>
                        <h1 className="m-2 font-bold font-Roboto ">{item.title}</h1>
                    </div>
                ))
            }

        </div>
    </section>
  )
}

export default Skills