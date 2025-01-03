// import React from 'react'

const About = () => {
  return (
    <div  className="w-full p-20 mt-48  bg-[#CDEA68] rounded-tl-3xl roundle-tr-3xl text-black ">
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses that need 
        to raise funds, sell products, explain complex ideas, and hire great people.
      </h1>
      <div className="flex gap-5 w-full border-t-[1px] pt-10 border-black mt-20">
        <div className="w-1/2">
           <h1 className="text-5xl">Our Approach:</h1>
           <button className="uppercase flex gap-10 items-center mt-10 w-38 px-6 py-3 bg-zinc-900 rounded-full text-white">Read More
              <div className="w-2 h-2 rounded-full bg-zinc-100 "></div>
           </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-[#b6c190] rounded-3xl" >

        </div>
      </div>
    </div>
  )
}

export default About
