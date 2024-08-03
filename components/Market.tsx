'use client'

import React from 'react'
import CustomButton from './CustomButton'

const Market = () => {
  const handleClick = () => {}

  return (
    <div className='bg-primary py-12 flex flex-col md:flex-row items-center justify-center px-6 md:px-40'>
      <h1 className='text-white text-2xl mb-4 md:mb-0 md:mr-6 text-center md:text-left'>Ready to get started?</h1>
      <CustomButton
        title='Get Free Consultancy'
        containerStyles='py-3 px-6 text-primary bg-white rounded-sm shadow border border-transparent hover:bg-primary-500'
        handleClick={handleClick}
      />
    </div>
  )
}

export default Market
