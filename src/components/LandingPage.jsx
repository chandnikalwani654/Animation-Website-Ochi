// import React from 'react'
import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
   
      <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full  bg-zinc-900 pt-1'>
        {/*text jo bhi h usko animate kar rahe */}
        
        <div className='textstructure mt-52 px-20'>
        
            {/*yaa toh alag alag maskers banao yaa phir map use kar lo */}

            {["We Create","Eye Opening","Presentations"].map((item,index)=>{
              return (
              <div className='masker' key={index}>
                   <div className="w-fit flex items-end overflow-hidden">
                   {index===1 && 
                   (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1 }} className="mr-2 w-[9vw] h-[4.5vw] rounded-md relative -top-[.25vw] bg-red-500"></motion.div>)}
                    <h1 className='flex items-center leading-[4.9vw] h-full uppercase text-[6vw] font-foundersGrotesk tracking-tighter font-semibold'>{item}</h1>
                  </div>
                  </div>
              );
            })}
          
              {/* <div className='masker'>
                <h1 className='leading-[7vw] uppercase text-8xl font-["Founders_Grotesk"] tracking-tighter font-medium'>eye opening</h1>
              </div>
              <div className='masker'>
                <h1 className='leading-[7vw] uppercase text-8xl font-["Founders_Grotesk"] tracking-tighter font-medium'>Presentations</h1>
              </div> */}

        </div>


        <div className='border-t-[2px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20 '>
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>
            <p key={index} className='text-md font-light tracking-tighter leading-none'>{item}</p>)}
            <div className='start flex items-center gap-5'>
                <div className='px-5 py-2 border-[1px] rounded-full border-zinc-400 font-light uppercase text-md'>Start the project</div> 
                <div className='w-9 h-9 rounded-full border-zinc-400  border-[1px] flex items-center justify-center'>
                  <span className="rotate-[45deg]">
                      <FaArrowUpLong/>
                  </span>
                </div>
            </div>
        </div>
 
        
      </div>
  )
}

export default LandingPage
