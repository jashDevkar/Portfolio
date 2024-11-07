import { data } from "autoprefixer";



function Description({ name ,fun}) {


    const des=[
        {name:'Notes Sphere',text:`Notes sphere is a mobile app build using technology like react native.
            notes sphere allows student of engineering department to view notes in the form of pdf
            notes sphere is compatabile in both android and ios as it is built using native technology.
            Notes sphere data is stored in cloud storage in firebase and it is fetched in realtime using firebase api`},
        {name:'Desert ordering',text:`Desert ordering is a pastry ordering website made using django a python framework.
            users are being authenticated using Django inbuilt user authentication.All the details about the pastry
            are stored in sqlLite3 database`},
        {name:'User-firebase',text:`User-firebase a todo type project where admin can add new new users to the list and can also delete users.
            similar to todo list we can count number of total users in the list. This list contain user information such as email name and age.
            All this information are stored in Firestore and new users are created and deleted realtime.`},
        {name:'Calculator',text:`Made a simple calculator using react js with working functionality and a good gui`},
        {name:'Portfolio',text:`this website which you are seeing is made using vite+react a frontend library made by facebook.
            No third party library has been used to make this website. some parts of the gui are inspired by a youtube channels video while rest 
            rest of the gui is mmade by me.`}
    ]




  return (
    <div className="relative group md:w-[50%] mx-4 bg-gradient-to-r from-black/80 via-slate-900/80 to-gray-800/80 backdrop-blur-sm mt-[30px] py-5">
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-transparent border-b-slate-900"/>

      <h1 className="text-center text-2xl font-semibold">{name}</h1>
      
      {
        des.map((item,index)=>{
            if(item.name== name){
                return(
                    <div key={index} className="text-justify mt-3 md:px-10 px-5">
                        <p key={index} className="text-white ">{item.text}</p>
                    </div>
                )
            }
        })

      }

      <div className="flex justify-center items-center mt-3">


      <button onClick={fun} className="bg-transparent border-2 border-gray-500 px-5 py-1 hover:bg-red-700 rounded-sm hover:border-red-700 transition-all duration-700 hover:tracking-widest ">close</button>
      </div>


    </div>
  );
}

export default Description;
