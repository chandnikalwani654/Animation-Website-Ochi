// import React from 'react'

import { useEffect, useState } from "react"

const Eyes = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove",(e)=>{
       //console.log(e);

       //coordinates of mouse pointer
       let mouseX = e.clientX;
       let mouseY = e.clientY;

       //difference of mouse pointer from window ka center 
       let deltaX = mouseX - window.innerWidth/2;
       let deltaY = mouseY - window.innerHeight/2;

       //angle nikalna h jisse eyes ko move karenge ,atan2 angle ko radian mai deta h usko degree mai convert karna hota h
       var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
       setRotate(angle-180);//kyuki aise ulta rotate hoga
    })
  })
  
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-section data-scroll-speed="-.7" className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] ">
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100 ">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 ">
              <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className=" line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8  ">
                <div className="w-8 h-8 rounded-full bg-zinc-100 ">
                        
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100 ">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 ">
              <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className=" line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8  ">
                <div className="w-8 h-8 rounded-full bg-zinc-100 ">
                        
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes
