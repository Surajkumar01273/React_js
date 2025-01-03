import React from 'react'
import './spinner.css'

const Spinner = () => {
  return (
    <div className='space-y-2 flex flex-col'>
      <div className='spinner'></div>
      <p className='text-white text-lg font-semibold'>Loding....</p>
    </div>
  )
}

export default Spinner
