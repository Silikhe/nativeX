'use client'

import React from 'react'
import Image from 'next/image'
import CustomButton from '../../components/CustomButton' 
import Pillar from '../../components/Pillars' 
import Content from '../../components/Content' 
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

const About = () => {
  const handleScroll = () => {
    // Your scroll handling logic
  }

  return (
    <main className='overflow-hidden'>
      <div className='flex flex-col lg:flex-row bg-[#ECECEF]'>
        <div className='flex-1 px-10 lg:px-40 md:py-52 py-32'>
          <h1 className='text-navy text-4xl lg:text-5xl font-bold'>
            About Native X
          </h1>
          <p className='text-gray-600 mt-6 text-md font-light'>
            Himalayan Java Coffee Beans are grown locally and are roasted to
            perfection in the ideal Himalayan air. It is then packaged
            immediately and rushed off to our outlets which ensures we deliver
            the best coffee experience possible for all of our customers.
          </p>
          <CustomButton
            title='Get In Touch'
            containerStyles='py-3 mt-6 px-6 text-white rounded-sm shadow-sm bg-primary hover:bg-primary-500'
            handleClick={handleScroll}
          />
          <div className='flex space-x-4 mt-20'>
            <a href='#' className='text-black text-xl'>
              <FaInstagram />
            </a>
            <a href='#' className='text-black text-xl'>
              <FaFacebookF />
            </a>
            <a href='#' className='text-black text-xl'>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className='flex-1 flex flex-col'>
          {/* Right Section */}
          <div
            className='relative flex-1 bg-cover bg-center'
            style={{ backgroundImage: "url('/images/dummy.jpg')" }}
          >
            <div className='flex flex-col h-full'>
              {/* Top Part */}
              <div className='flex-1 relative'>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className='absolute inset-0'>
                  {/* You can add any additional content or styling here */}
                </div>
              </div>
              {/* Bottom Part */}
              <div className='h-20 flex bg-black md:pr-40'>
                <div className='flex-1 p-4 flex items-center justify-center text-center'>
                  <h1 className='text-white text-2xl font-medium mr-2'>7</h1>
                  <p className='text-white font-thin'>Years Experience</p>
                </div>
                <div className='flex-1 p-4 flex items-center justify-center text-center'>
                  <h1 className='text-white text-2xl font-medium mr-2'>7</h1>
                  <p className='text-white font-thin'>Years Experience</p>
                </div>
                <div className='flex-1 p-4 flex items-center justify-center text-center'>
                  <h1 className='text-white text-2xl font-medium mr-2'>7</h1>
                  <p className='text-white font-thin'>Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pillar />
      <Content />
    </main>
  )
}

export default About
