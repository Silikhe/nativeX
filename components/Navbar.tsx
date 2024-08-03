'use client'

import React, { useState } from 'react'
import CustomButton from './CustomButton'
import LanguageDropdown from './LanguageDropdown'
import Image from 'next/image'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = () => {}

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <nav className='bg-white border-gray-200'>
      <div className='px-10 md:px-40 flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href='' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <div className='w-36 h-20 relative'>
            <Image
              src='/images/logo.png'
              alt='Native X Logo'
              layout='fill'
              objectFit='contain'
              className='object-contain'
            />
          </div>
        </a>
        
        {/* Hamburger Menu Button */}
        <button
          data-collapse-toggle='navbar-cta'
          type='button'
          className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='navbar-cta'
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-5 h-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>

        {/* Main Navigation Links */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`}
          id='navbar-cta'
        >
          <ul className='flex flex-col font-small p-4 md:p-0 mt-4 mr-40 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white'>
            <li>
              <a
                href='/'
                className='block py-2 px-3 rounded text-gray-700 hover:bg-primary-100 hover:text-primary-600 md:text-gray-700 md:hover:text-primary-600 md:active:text-black'
                aria-current='page'
              >
                For Companies
              </a>
            </li>
            <li>
              <a
                href='developers'
                className='block py-2 px-3 rounded text-gray-700 hover:bg-primary-100 hover:text-primary-600 md:text-gray-700 md:hover:text-primary-600 md:active:text-black'
              >
                For Developers
              </a>
            </li>
            <li>
              <a
                href='about'
                className='block py-2 px-3 rounded text-gray-700 hover:bg-primary-100 hover:text-primary-600 md:text-gray-700 md:hover:text-primary-600 md:active:text-black'
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href='reviews'
                className='block py-2 px-3 rounded text-gray-700 hover:bg-primary-100 hover:text-primary-600 md:text-gray-700 md:hover:text-primary-600 md:active:text-black'
              >
                Reviews
              </a>
            </li>
          </ul>
          
          {/* Move "Get In Touch" button and "LanguageDropdown" here */}
          <div className='flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0'>
            <CustomButton
              title='Get In Touch'
              containerStyles='py-3 px-6 text-white rounded-sm shadow bg-primary hover:bg-primary-500'
              handleClick={handleScroll}
            />
            <LanguageDropdown />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
