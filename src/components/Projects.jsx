import Slider from "react-slick";

function Projects({projectRef}) {


    const settings ={
        dots:false,
        arrows:true,
        slidesToShow:5,
        slidesToScroll:1,
        infinite : true,
        speed:500,
        autoplay:true,
        autoplaySpeed : 4000,
        cssEase:"linear",
        pauseOnHover : true,
        pauseOnFocus: true,
        responsive:[
                    {
                breakpoint:1024,
                settings:{
                    slidesToShow:5,
                    slidesToScroll : 1,
                    initialSlide:5,
                },
            },
            {
                breakpoint:640,
                settings:{
                    slidesToShow:1,
                    slidesToScroll : 1,
                },
            },
        ]
        
        
    }

    const myCards=[
        {title:'React js',imagePath:'Reactjs.png',url:'https://react.dev/learn'},
        {title:'React Native',imagePath:'Reactjs.png',url:'https://reactnative.dev/docs/environment-setup'},
        {title:'Django',imagePath:'python.jpg',url:'https://docs.djangoproject.com/en/5.1/'},
        {title:'Flutter',imagePath:'flutter.png',url:'https://flutter.dev/learn'},
        {title:'Node js',imagePath:'Nodejs.png',url:'https://nodejs.org/en'}
    ]

  return (
    
    <section  className="border-b-2 border-gray-500 pb-7 md:static flex justify-center items-center flex-col" ref={projectRef}>
    <header className="h-[10vh] text-center text-4xl mt-4  font-Pacifico">Projects</header>

    <div className=" mb-2 px-8 md:w-full w-[70%] ">
        
        <Slider {...settings}>

        {
                myCards.map((item)=>(
                    <div
                    key={item.id}
                    className="md:w-[200px] w-[170px] md:h-[240px] h-[200px] bg-[#2C2C2C] rounded-lg cursor-pointer   transition-shadow relative shadow-sm group"
                  >
                    <div className=" absolute h-full w-full flex justify-center items-center bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 ease-in-out transition-all duration-700">
                      <button className="p-1 hidden group-hover:block rounded-lg  text-white text-[12px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 ">
                        <a href={item.url}>Learn topic</a>
                      </button>
                    </div>
                    <img
                      src={item.imagePath}
                      className="md:w-full w-[210px] h-[160px] md:h-[80%]  rounded-lg"
                    />
                    <div className="flex justify-between mt-3 items-center px-2">
                      <h1 className="font-bold font-Roboto group-hover:text-[12px] md:group-hover:text-[16px]  ">
                        {item.title}
                      </h1>
                    </div>
                  </div>
                ))
            }
        </Slider>

    </div>
</section>
  
  )
}

export default Projects;

// hover:shadow-[#D054A0] 