import React from 'react'
import { FaQuoteLeft, FaQuoteRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa'

function Card(props) {
    let review = props.review;
    

    return (
        <>
            <div className='flex flex-col md:relative pt-4'>

                <div className='md:absolute md:top-[-7rem] top-0 z-[10] mx-auto'>
                    <img className='aspect-square h-[140px] w-[140px] md:mt-[0] rounded-full transition-all duration-500  hover:rotate-180' src={review.image} />
                    <div className='w-[140px] h-[140px] bg-violet-500 hidden md:block rounded-full md:absolute md:top-[-6px] z-[-10] md:left-[10px]'></div>
                </div>

                <div className='text-center md:mt-7 mt-2'>
                    <p className='font-bold text-2xl capitalize tracking-wider'>{review.name}</p>
                </div>

                <div className='text-center mt-1'>
                    <p className='text-violet-500 uppercase text-xs'>{review.job}</p>
                </div>

                <div className='text-violet-400 mx-auto md:mt-5 mt-6'>
                    <FaQuoteLeft />
                </div>

                <div className='p-2 md:mt-4 mt-1 text-slate-900 text-sm'>
                    <p>{review.text}</p>
                </div>
                <div className='text-violet-400 mx-auto md:mt-5 mt-2'>
                    <FaQuoteRight />
                </div>
                
            </div>
        </>
    )
}

export default Card
