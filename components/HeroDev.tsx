'use client'

import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
  const handleScroll = () => {}

  return (
    <div className='hero-dev flex flex-col lg:flex-row p-10 lg:p-40 py-20 bg-primary'>
      <div className='flex-1 pt-10 lg:pt-36'>
        <h1 className='text-white text-4xl lg:text-5xl font-bold'>
          Build your career by working with international tech companies
        </h1>
        <p className='text-white mt-6 text-md font-light'>
          With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within a few minutes.
        </p>
        <CustomButton
          title='Explore More'
          containerStyles='py-3 mt-6 px-6 text-white rounded-sm shadow-md bg-primary hover:bg-primary-500'
          handleClick={handleScroll}
        />
      </div>
      <div className='flex-1  justify-center items-center mt-10 lg:mt-0 hidden md:block'>
        <div className='w-100 lg:w-full h-96 p-5 rounded-sm shadow-sm flex justify-center items-center relative'>
          <div className='absolute inset-0 bg-black opacity-50 rounded-lg'></div>
          <Image
            src='/images/dummy.jpg'
            alt='hero image'
            layout='fill'
            objectFit='cover'
            className='rounded-lg'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
