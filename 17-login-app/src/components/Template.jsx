import React from 'react';
import LoginForm from './LoginForm';
import formPic from '../assets/formPic.jpeg';
import {FcGoogle} from 'react-icons/fc';
import SignupForm from './SignupForm';

const Template = ({ title, desc1, desc2, image, formtype, setIsLogedIn }) => {
    
    return (
        <div className='flex w-11/12 max-w-[1160px] mt-16  mx-auto gap-20 justify-evenly gap-y-0'>
            <div className=''>
                <h1 className='text-white font-bold text-2xl leading-10'>{title}</h1>
                <p className='text-lg leading-12 mt-4'>
                    <span className='text-gray-300'>{desc1}</span>
                </p>
                <p>
                    <span className='text-sky-400 italic'>{desc2}</span>
                </p>
                {
                    formtype === "signup" ? (<SignupForm setIsLogedIn={setIsLogedIn} />) : (<LoginForm setIsLogedIn={setIsLogedIn} />)
                }

                <div className='flex w-full items-center my-4 gap-x-2'>
                    <div className='bg-gray-500 h-[1px] w-full'></div>
                    <p className='text-white'>OR</p>
                    <div className='bg-gray-500 h-[1px] w-full'></div>
                </div>
                <button className='w-full border-2 px-[12px] py-[8px] rounded-lg border-gray-600 font-medium flex justify-center items-center gap-x-2'>
                    <FcGoogle className='text-xl' />
                    <p className='text-white'> Sign in with Google</p>
                </button>
            </div>

            <div className='w-11/12 max-w-[450px]'>
                <img className='h-[400px] w-[350px] mt-12  rounded-md' src={formPic} alt="formPic"loading='lazy' />
                {/* <img src={formPic} alt="formPic" width={558} height={490} loading='lazy' /> */}
            </div>
        </div>
    )
}

export default Template
