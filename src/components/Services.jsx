import React from 'react'
import Card from './Card'
import HeartEmoji from "../img/heartemoji.png"
import Glasses from "../img/glasses.png"
import Humble from "../img/humble.png"
import SandeepResume from "../img/SandeepResume.pdf"

const Services = () => {
  return (
  <>
 <div className='flex absolute  justify-center my-10'>
 <div className="left flex flex-col mx-24">
    <span className="awesome  text-6xl font-bold text-[#1a2033]">
        My Awesome
    </span>
    <span className="services  my-6 text-6xl font-bold text-[#FCA61F] ">
        Services
    </span>
    <span className='w-[36rem] text-[#1a2033] text-lg font-semibold'>
        I was able to complete Reactjs Or MERN project from Scratch,you have to give me one chance to show my skills 
    </span> 
    <a href={SandeepResume} download><button className='rounded-2xl my-6 py-2 absolute px-6  text-white font-semibold hover:-translate-y-1 shadow-[#FCA61F] shadow-xl bg-[#FCA61F] hover:bg-blue-400 hover:shadow-blue-400 active:bg-blue-600  '>Download CV</button></a>
   
  </div>
 
  <div className="right flex-1 ">
     <div className='absolute mx-56 -my-24'>
     <Card
      emoji={HeartEmoji}
      heading={'Design'}
      detail={"Figma, scratch,Adobe, AWS, Hosting, photoshop"}
      />
      </div>
      <div className='absolute my-56 -mx-28' >
     <Card
      emoji={Glasses}
      heading={'Developer'}
      detail={"Html,Css,Javascript,React,Node"}
      />
      </div >
      <div className='absolute my-72 mx-56'>
     <Card
      emoji={Humble}
      heading={'React'}
      detail={"Tailwindcss,Bootstrap,Scss,Rest-Api,WebHosting"}
      />
      </div>
     
  </div>
 </div>
  
  
  </>
  )
}

export default Services
