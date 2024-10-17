import Slider from "react-slick";

function Projects({projectRef}) {


    const settings ={
        dots:false,
        arrows:true,
        slidesToShow:5,
        slidesToScroll:1,
        infinite : true,
        speed:500,
        autoplay:false,
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
        {title:'Notes Sphere',imagePath:'book.jpg',url:'https://react.dev/learn'},
        {title:'React Native',imagePath:'',url:'https://reactnative.dev/docs/environment-setup'},
        {title:'Django',imagePath:'',url:'https://docs.djangoproject.com/en/5.1/'},
        {title:'Flutter',imagePath:'',url:'https://flutter.dev/learn'},
        {title:'Node js',imagePath:'',url:'https://nodejs.org/en'}
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
                    className="md:w-[200px] w-[170px] md:h-[280px] h-[250px] bg-[#2C2C2C] rounded-lg cursor-pointer   transition-shadow relative shadow-sm group "
                  >
                    {/* <div className=" absolute h-full w-full flex justify-center items-center bg-black/35 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 ease-in-out transition-all duration-700">
                      <button className="p-1 hidden group-hover:block rounded-lg  text-white text-[12px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 ">
                        <a href={item.url}>Learn topic</a>
                      </button>
                    </div> */}

                    <div className="relative md:h-[55%] h-[50%] bg-gray-700 rounded-lg flex items-center justify-center ">
                      <img src={item.imagePath} className="h-28 w-28 rounded-full"/>
                    </div>

                    <h1 className="text-center font-Roboto mt-2">{item.title}</h1>
                    <section className="ml-2 text-[12px] mt-2 text-center"><p>Android/ios application</p></section>
                    
                    <div className="flex justify-evenly mt-3 text-[12px]">
                      <button className="border-2 border-gray-500 rounded-lg p-1">Show more</button>
                      <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500  p-1 rounded-lg">Source code</button>
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