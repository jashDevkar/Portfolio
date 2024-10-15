import Slider from "react-slick";

function Projects({projectRef}) {


    const settings ={
        dots:false,
        arrows:true,
        slidesToShow:5,
        infinite : true,
        speed:500,
        autoplay:true,
        autoplaySpeed : 4000,
        cssEase:"linear",
        pauseOnHover : true,
        pauseOnFocus: true,
        responsive:[
            {
                breakpoint:20000,
                settings:{
                    slidesToShow:2,
                    slidesToScroll : 1,
                    infinite : true,
                },
            },
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:2,
                    slidesToScroll : 1,
                    initialSlide:2,
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
    
    <section  className="border-b-2 border-gray-500 pb-7 " ref={projectRef}>
    <header className="h-[10vh] text-center text-4xl mt-4 font-semibold ">Projects</header>

    <div className=" mb-2 px-8 ">
        
        <Slider {...settings}>

        {
                myCards.map((item)=>(
                    <div key={item.id} className=" bg-[#2C2C2C] rounded-lg h-[250px] w-[250px]" >
                    
                        <div>
                            <img src={item.imagePath}/>
                        </div>

                        <div>
                            <h1>{item.title}</h1>
                            <button><a href={item.url}>Learn topic</a></button>
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