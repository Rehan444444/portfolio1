import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="navbar flex  justify-center h-10vh  p-6">
        <div className="left flex position:absolute mx-44 space-x-7">
           <div className="name font-bold text-3xl  text-[#FCA61F]">Sandeep</div> 
           <span className='text-3xl font-bold'>toggle</span>

        </div>
        <div className="right mx-44 flex ">
            <div className="list ">
                <ul className='flex space-x-8 text-xl font-semibold my-2 mx-16'>
                    <li className='hover:text-[#FCA61F] hover:-translate-y-1 cursor-pointer'>Home</li>
                    <li className='hover:text-[#FCA61F] hover:-translate-y-1 cursor-pointer'>Services</li>
                    <li className='hover:text-[#FCA61F] hover:-translate-y-1 cursor-pointer'>Experiences</li>
                    <li className='hover:text-[#FCA61F] hover:-translate-y-1 cursor-pointer'>Portfolio</li>
                    <li className='hover:text-[#FCA61F] hover:-translate-y-1 cursor-pointer'>Testimonials</li>
                </ul>
            </div>
            <button className="contact px-6 rounded-2xl text-white font-semibold hover:-translate-y-1 shadow-[#FCA61F] shadow-xl bg-[#FCA61F] hover:bg-blue-400 hover:shadow-blue-400 active:bg-blue-600 ">Contact</button>
        </div>
    </div>
    
    </>
  )
}

export default Navbar
