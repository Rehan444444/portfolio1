import React from 'react'

const FloatingDiv = ({image, text1, text2}) => {
  return (
    <>
    <div className=' -my-[30rem] mx-[33rem] h-24 shadow-lg shadow-gray-500 z-50 pr-40 px-16 bg-origin-content bg-white rounded-2xl hover:-translate-y-2 items-center flex space-x-4 '>
        <img className='' src={image} alt="" />
        <span className=' font-semibold text-[#FCA61F] hover:font-semibold'>
            {text1}<br/>
            {text2}
        </span>
    </div>
    </>
  )
}

export default FloatingDiv
