import React, { useState } from 'react'
import Card from './Card'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

function Testimonial(props) {
  let reviews = props.reviews;


  let [index, setIndex] = useState(0)

  function leftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1)
    }
    else {
      setIndex(index - 1)
    }
  }

  function rightHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0)
    }
    else {
      setIndex(index + 1)
    }
  }

  function surpriseHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length)
    setIndex(randomIndex);

  }


  return (
    <>
      <div className='w-[85vw] bg-white md:w-[700px] flex flex-col md:justify-center md:items-center mt-2 md:mt-10 rounded-md md:p-10 transition-all duration-700 hover:shadow-xl'>
        <Card review={reviews[index]} />

        <div className='text-violet-500 md:mt-10 mt-4 mx-auto md:mb-4'>
          <button onClick={leftHandler} className='cursor-pointer hover:text-violet-700 text-2xl mr-4'><FaAngleLeft /></button>
          <button onClick={rightHandler} className='cursor-pointer hover:text-violet-700 text-2xl'><FaAngleRight /></button>
        </div>
        <div className='mx-auto mb-6 mt-2'>
          <button onClick={surpriseHandler} className='border-none  transition-all duration-200 cursor-pointer px-6 py-2 outline-none bg-violet-500 hover:bg-violet-800 text-white rounded-lg font-bold'>Surprise Me</button>
        </div>
      </div>
    </>
  )
}

export default Testimonial
