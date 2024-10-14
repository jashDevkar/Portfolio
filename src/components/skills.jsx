

function Skills() {


    const myCards=[
        {title:'React js',imagePath:'Reactjs.png'},
        {title:'React Native',imagePath:'Reactjs.png'},
        {title:'Django',imagePath:'python.jpg'},
        {title:'Flutter',imagePath:'flutter.png'},
        {title:'Node js',imagePath:'Nodejs.png'}
    ]

  return (
    <section >
        <header className="h-[10vh] text-center text-4xl mt-2 font-semibold">Skills</header>

        <div className="flex flex-wrap gap-10 mb-2 justify-center items-center md:px-7">

            {
                myCards.map((item,index)=>(
                    <div key={index} className="md:w-[220px] w-[300px] h-[250px] bg-slate-900 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-slate-400 transition-shadow" >
                        <img src={item.imagePath} className="md:w-[220px] w-[300px] h-[210px] rounded-lg"/>
                        <h1 className="m-2 font-bold font-Roboto ">{item.title}</h1>
                    </div>
                ))
            }

        </div>
    </section>
  )
}

export default Skills