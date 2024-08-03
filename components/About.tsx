'use client'

import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const About = () => {
  const handleScroll = () => {}

  return (
    <div className='flex flex-col xl:flex-row px-4 xl:px-40 gap-8'>
      {/* Content Section */}
      <div className='flex-1 pt-36'>
        <h1 className='text-4xl font-bold'>
          Native X matches awesome people with awesome jobs.
        </h1>
        <p className='text-gray-600 mt-6 text-lg'>
          Lorem ipsum dolor sit amet consectetur. Odio nulla amet in sagittis
          aliquam. Nibh rhoncus nec pellentesque egestas augue convallis. At
          tempor adipiscing scelerisque pellentesque massa suscipit pharetra
          volutpat tellus. Nibh tortor amet ullamcorper pretium ante nulla massa
          scelerisque ut.
        </p>
        <CustomButton
          title='Get In Touch'
          containerStyles='py-3 mt-6 px-6 text-primary rounded-sm shadow- border hover:bg-primary-500'
          handleClick={handleScroll}
        />
      </div>

      {/* Images Section */}
      <div className='flex-1 flex flex-col gap-4 xl:gap-4 py-16'>
        {/* First row */}
        <div className='relative w-full h-40 xl:h-52'>
          <Image
            src='/images/dummy.jpg'
            alt='Hero image 1'
            layout='fill'
            className='object-cover'
          />
        </div>

        {/* Second row */}
        <div className='flex w-full gap-4'>
          <div className='relative w-3/4 h-40 xl:h-52'>
            <Image
              src='/images/dummy.jpg'
              alt='Hero image 2'
              layout='fill'
              className='object-cover'
            />
          </div>
          <div className='relative w-1/4 h-40 xl:h-52'>
            <Image
              src='/images/dummy.jpg'
              alt='Hero image 3'
              layout='fill'
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
