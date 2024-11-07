
function Heading({data}) {
    
  return (
    <header className=" text-center md:text-4xl text-2xl mt-8 mb-8 font-Poppins font-semibold">
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
          {data.decorated}{" "}
        </span>
        {data.text}
      </header>
  )
}

export default Heading