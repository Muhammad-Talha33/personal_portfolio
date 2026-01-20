"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { NAV_LINKS } from '../../../constants';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav className='padding-container relative z-30 rounded-lg bg-white shadow-sm ring-1 ring-slate-100 py-4 lg:py-0' initial={{ opacity: 0, y: -100 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}>
      <div className="flexBetween max-container">
        <Link href="/" className='bold-28 capitalize relative'>
          <span className='text-black'>Portfolio</span>
          <span className='absolute top-[-0.3rem] right-[-1rem] h-5 w-5 linearGradient rounded-full -z-10'></span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className='hidden h-full gap-6 lg:flex px-6 py-3'>
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className='flexCenter text-[15px] font-[500] text-black hover:bg-black hover:text-white px-4 py-1 rounded-full cursor-pointer transition-all duration-300'>
              {link.label}
            </Link>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <Image
          src="menu.svg"
          alt='menu'
          width={28}
          height={28}
          className='inline-block cursor-pointer lg:hidden'
          onClick={toggleMenu}
        />

        {/* Mobile Navigation Links */}
  {/* Mobile Navigation Links */}
{isMenuOpen ? (
  <div
    className='lg:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg transform translate-y-0 opacity-100 transition-all duration-300 ease-in-out pointer-events-auto'
  >
    <ul className='flex flex-col gap-4 p-6'>
      {NAV_LINKS.map((link) => (
        <Link
          href={link.href}
          key={link.key}
          className='text-[15px] font-[500] text-black hover:bg-black hover:text-white px-4 py-2 rounded-full cursor-pointer transition-all duration-300'
        >
          {link.label}
        </Link>
      ))}
    </ul>
  </div>
) : (
  <div
    className='lg:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg transform translate-y-full opacity-0 transition-all duration-300 ease-in-out pointer-events-none'
  >
    <ul className='flex flex-col gap-4 p-6'>
      {NAV_LINKS.map((link) => (
        <Link
          href={link.href}
          key={link.key}
          className='text-[15px] font-[500] text-black hover:bg-black hover:text-white px-4 py-2 rounded-full cursor-pointer transition-all duration-300'
        >
          {link.label}
        </Link>
      ))}
    </ul>
  </div>
)}

      </div>
    </motion.nav>
  );
};

export default Navbar;

{/* Mobile Navigation Links with animation */}
// {isMenuOpen ? (
//   <div className='lg:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg transform translate-y-0 opacity-100 transition-all duration-300 ease-in-out'>
//     <ul className='flex flex-col gap-4 p-6'>
//       {NAV_LINKS.map((link) => (
//         <Link
//           href={link.href}
//           key={link.key}
//           className='text-[15px] font-[500] text-black hover:bg-black hover:text-white px-4 py-2 rounded-full cursor-pointer transition-all duration-300'
//         >
//           {link.label}
//         </Link>
//       ))}
//     </ul>
//   </div>
// ) : (
//   <div className='lg:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg transform translate-y-full opacity-0 transition-all duration-300 ease-in-out'>
//     <ul className='flex flex-col gap-4 p-6'>
//       {NAV_LINKS.map((link) => (
//         <Link
//           href={link.href}
//           key={link.key}
//           className='text-[15px] font-[500] text-black hover:bg-black hover:text-white px-4 py-2 rounded-full cursor-pointer transition-all duration-300'
//         >
//           {link.label}
//         </Link>
//       ))}
//     </ul>
//   </div>
// )}
