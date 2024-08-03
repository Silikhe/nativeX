'use client'

import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle form submission
  }

  const handleClick = () => {}

  return (
    <div className='contact_hero bg-black flex flex-col xl:flex-row px-10 xl:p-40 gap-8'>
      <div className='flex-1 pt-16 xl:pt-'>
        <div className='relative w-20 h-20 mb-4'>
          <Image
            src='/images/chat.svg'
            alt='hero image'
            layout='fill'
            className='object-contain'
          />
        </div>
        <h1 className='text-4xl font-bold text-white'>
          Get a free consultancy from our expert right now!
        </h1>
        <p className='text-gray-200 mt-6 text-lg'>
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page so quickly with Albino.
        </p>
      </div>
      <div className='flex-1 mb-10 md:mb-0 '>
        <div className='relative z-40 p-4 bg-white rounded-sm shadow-sm'>
          <form onSubmit={handleSubmit} className='m-6'>
            <div className='flex flex-col gap-4'>
              <div>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-medium text-gray-700'
                >
                  Your Name
                </label>
                <input
                  id='name'
                  type='text'
                  placeholder='Your Name'
                  className='w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-700'
                >
                  Your Email
                </label>
                <input
                  id='email'
                  type='email'
                  placeholder='Your Email'
                  className='w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='message'
                  className='block mb-2 text-sm font-medium text-gray-700'
                >
                  Your Message
                </label>
                <textarea
                  id='message'
                  placeholder='Your Message'
                  className='w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary'
                  rows={4}
                  required
                />
              </div>
              <CustomButton
                title='Get Free Consustancy'
                containerStyles='w-full py-3 px-6 text-white bg-primary rounded-sm shadow border border-transparent hover:bg-primary-500'
                handleClick={handleClick}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
