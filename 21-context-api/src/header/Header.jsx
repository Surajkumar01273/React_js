import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='h-14 w-full bg-slate-800 text-white px-5 fixed top-0 flex items-center justify-between'>
      <div className='text-xl text-pink-500 font-bold'>LOGO</div>
      
      {/* Mobile Menu Toggle */}
      <div className='md:hidden'>
        <button onClick={() => setIsOpen(!isOpen)} className='text-white text-2xl'>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      
      {/* Navigation */}
      <ul className={`md:flex md:items-center md:gap-x-10 text-lg font-semibold absolute md:static bg-slate-800 md:bg-transparent top-14 left-0 w-full md:w-auto px-5 md:px-0 py-5 md:py-0 space-y-4 md:space-y-0 ${isOpen ? 'block' : 'hidden'}`}>
        <NavLink to='/' className='block md:inline hover:text-orange-400'>Home</NavLink>
        <NavLink to='/about' className='block md:inline hover:text-orange-400'>About</NavLink>
        <NavLink to='/contactus' className='block md:inline hover:text-orange-400'>Contact Us</NavLink>
      </ul>
      
      {/* Buttons */}
      <div className='hidden md:flex gap-x-4'>
        <button className='py-1 px-4 bg-gray-400 text-black text-lg rounded-lg'>Login</button>
        <button className='py-1 px-4 bg-gray-400 text-black text-lg rounded-lg'>Sign up</button>
      </div>
    </div>
  );
}

export default Header;
