// import React from 'react'

const Cards = () => {
  return (
    <div className="flex items-center px-32 gap-5 w-full h-screen bg-zinc-900">
        <div className="cardcontainer h-[50vh] w-1/2">
           <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
                <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"/>
                <button className="absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full">&copy;2023</button>

           </div>
        </div>
        <div className="cardcontainer h-[50vh] flex gap-5 w-1/2">
            <div className="card relative rounded-xl w-1/2 h-full bg-zinc-400 flex items-center justify-center">
                <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"/>
                <button className="absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full">&copy;2023</button>
            </div>
            <div className="card relative rounded-xl w-1/2 h-full bg-zinc-500 flex items-center justify-center">
                <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"/>
                <button className="absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full">&copy;2023</button>

            </div>
        </div>
        
    </div>
  )
}

export default Cards
