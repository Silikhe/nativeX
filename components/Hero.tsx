'use client';

import React from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className='hero flex flex-col md:flex-row items-center justify-center px-8 py-1o md:py-0 md:px-40'>
      <div className='flex-1 pt-4 text-left md:text-left md:pt-0'>
        <h1 className='hero_title text-white text-4xl md:text-6xl font-bold'>
          Do you need skilled IT Developers?
        </h1>
        <p className='text-white mt-6 text-base md:text-lg font-light'>
          With lots of unique blocks, you can easily build a page without
          coding. Build your next consultancy website within few minutes.
        </p>
        <CustomButton
          title='Explore More'
          containerStyles='py-3 mt-6 px-6 text-white rounded-sm shadow-md bg-primary hover:bg-primary-500'
          handleClick={handleScroll}
        />

        <div className='mt-16 flex flex-col  md:items-start'>
          <p className='text-white text-sm font-bold'>OUR MAIN PARTNER</p>
          <div className='relative w-24 h-16 md:w-44 md:h-24 mt-1'>
            <Image
              src='/images/patner.png'
              alt='partner image'
              layout='fill'
              className='object-contain'
            />
          </div>
        </div>
      </div>

      <div className='xl:flex-[1] justify-end items-end w-full xl:h-screen hidden md:block'>
        <div className='hero__image relative w-full h-full'>
          <Image
            src='/images/map_export.png'
            alt='hero image'
            layout='fill'
            className='object-contain'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
