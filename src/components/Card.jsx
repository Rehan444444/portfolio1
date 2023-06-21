import React from 'react'

const Card = ({emoji, heading, detail}) => {
  return (
   <>
   <div className="container h-80  hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 origin-center shadow-[#FCA61F] shadow-xl w-72 border-8 rounded-2xl border-[#FCA61F]  ">
    <img className='mx-16' src={emoji} alt="" /><br/>
    <span className='text-2xl font-bold text-[#1a2033] mx-[5rem] -my-10 absolute'>{heading}</span><br/>
    <span className='p-2 -my-6 absolute mx-5'>{detail}</span><br/>
    <button className='shadow-xl my-4 rounded-xl mx-20 p-2 shadow-gray-400 text-blue-600'>Learn More</button>
   </div>
   
   
   </>
  )
}

export default Card
