import React from 'react'
import FloatingDiv from './FloatingDiv'
import Github from "../img/github.png"
import LinkedIn from "../img/linkedin.png"
import Instagram from "../img/instagram.png"
import Image1 from "../img/vector1.png"
import Image2 from "../img/vector2.png"
import Boy from "../img/boy.png"
import Thumbup from "../img/thumbup.png"
import Crown from "../img/crown.png"
import Glass from "../img/glassesimoji.png"

const Intro = () => {
  return (
   <>
   <div className="Intro flex justify-between p-20">
    <div className="left">
        <div className="name flex flex-col">
            <span className='text-6xl font-bold text-[#1a2033] my-2'>Hy! I Am</span>
            <span className='text-6xl font-bold text-[#FCA61F] my-6'>Sandeep Kumar</span>
            <span className='w-[36rem] text-[#1a2033] text-lg font-semibold'>A MERN stack developer specializes in building  full stack web application using React.js,Node.js,Express.js,Mongodb.</span>
            <span className='w-[36rem] text-[#1a2033] text-lg font-semibold'>I was Skilled in Both Frontend as well as Backend.</span>
        </div>
        <button className="hire my-9 rounded-2xl text-white font-semibold hover:-translate-y-1 shadow-[#FCA61F] shadow-xl bg-[#FCA61F] hover:bg-blue-400 hover:shadow-blue-400 active:bg-blue-600 px-6 py-2 ">Hire Me</button>
        <div className="icons flex space-x-16 my-20">
            <a href="https://github.com/Rehan444444"><img className=' cursor-pointer hover:-translate-y-1' src={Github} alt="Github Image" /></a>
            <a href="https://www.linkedin.com/in/sandeep-88b74b206"><img className=' cursor-pointer hover:-translate-y-1' src={LinkedIn} alt="" /></a>
            <img className=' cursor-pointer hover:-translate-y-1' src={Instagram} alt="" />

        </div>
    </div>
    <div className="right flex-1">
       <img className='my-[6rem] w-[34rem] mx-24 z-10' src={Image1} alt="" />
       <img className=' -my-[32rem] w-[30rem] mx-36 z-0' src={Image2} alt="" />
       <img className=' mx-56 z-30 w-[26rem] hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 origin-center' src={Boy} alt="" />
       <img className='-my-[40rem] hover:-translate-y-2' src={Glass} alt="" />
       <div className='my-[33rem]'>
        <FloatingDiv  text1='Web'  text2='Developer ' image={Crown}/>
       </div>
       
       <div className='my-[45rem] -mx-[38rem] absolute h-24'>
        <FloatingDiv  image={Thumbup} text1="Best Design" text2="Reward" />
       </div>
      
      
    </div>
   </div>
   
   </>
  )
}

export default Intro
