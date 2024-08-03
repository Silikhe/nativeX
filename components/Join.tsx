'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Join = () => {
  const cardData = [
    {
      title: 'Noteworthy technology acquisitions 2021',
      description:
        'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
      imageUrl: '/images/dummy.jpg',
      link: '#'
    },
    {
      title: 'Another tech acquisition',
      description: 'Details about another notable tech acquisition in 2021.',
      imageUrl: '/images/dummy.jpg',
      link: '#'
    },
    {
      title: 'More tech news',
      description: 'Latest updates in the tech world.',
      imageUrl: '/images/dummy.jpg',
      link: '#'
    }
  ]

  return (
    <div className='bg-[#F4F7FA] mx-auto px-10   lg:px-40 py-40'>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
        <div className='col-span-1 py-10 lg:py-20'>
          <h1 className='text-4xl font-bold'>Why Join Us?</h1>
          <p className='text-gray-600 mt-2 text-lg'>
            Our developers work on innovative tech solutions with teams across the globe. Here is why experienced African engineers
          </p>
        </div>
        <div className='col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {cardData.map((card, index) => (
            <div
              key={index}
              className='relative bg-white border border-gray-200 rounded-sm shadow-sm hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out'
            >
              <div className='relative h-64 lg:h-96 w-full overflow-hidden rounded-t-sm'>
                <Image
                  src={card.imageUrl}
                  alt=''
                  layout='fill'
                  objectFit='cover'
                  className='absolute inset-0 w-full h-full'
                />
              </div>
              <div className='absolute bottom-0 text-white left-0 right-0 bg-black bg-opacity-75 p-5'>
                <Link href={card.link}>
                  <h5 className='mb-2 text-xl font-bold tracking-tight text-white'>
                    {card.title}
                  </h5>
                </Link>
                <p className='mb-3 font-normal text-white'>
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

export default Join
