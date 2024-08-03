'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Pillar = () => {
  const cardData = [
    {
      title: '1',
      description:
        'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
      imageUrl: '/images/dummy.jpg',
      link: '#'
    },
    {
      title: '2',
      description: 'Details about another notable tech acquisition in 2021.',
      imageUrl: '/images/dummy.jpg',
      link: '#'
    },
    {
      title: '3',
      description: 'Latest updates in the tech world.',
      imageUrl: '/images/dummy.jpg',
      link: '#'
    }
  ]

  return (
    <div className='bg-[#F4F7FA] mx-auto md:p-40 p-10'>
      <div className=''>
        <div className='text-center py-20'>
          <h1 className='text-4xl font-bold'>Our Core Pillars</h1>
          <p className='text-gray-600 mt-2 text-lg'>
          With lots of unique blocks, you can easily build a page without coding. Build your next landing page.          </p>
        </div>
        <div className='col-span-3 grid rounded-sm grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {cardData.map((card, index) => (
            <div
              key={index}
              className='relative bg-white border border-gray-200 rounded-sm shadow-sm hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out'
            >
              <div className='relative h-80 w-full overflow-hidden rounded-t-sm'>
                <Image
                  src={card.imageUrl}
                  alt=''
                  layout='fill'
                  objectFit='cover'
                  className='absolute inset-0 w-full h-full'
                />
              </div>
              <div className='absolute inset-0 flex flex-col justify-end bg-black bg-opacity-75 p-10'>
                <Link href={card.link}>
                  <h1 className='mb-2 text-5xl font-medium tracking-tight text-white'>
                    {card.title}
                  </h1>
                </Link>
                <p className='text-white font-light'>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pillar
