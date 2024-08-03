'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Blog = () => {
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
    },
    {
      title: 'More tech news',
      description: 'Latest updates in the tech world.',
      imageUrl: '/images/dummy.jpg',
      link: '#'
    }
  ]

  return (
    <div className='bg-[#F4F7FA] mx-auto px-6 sm:px-20 lg:px-40 py-20'>
      <div className='text-center py-10'>
        <h1 className='text-4xl font-bold'>News that helps</h1>
        <p className='text-gray-600 mt-2 text-lg mx-10'>
        With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {cardData.map((card, index) => (
          <div
            key={index}
            className='w-full bg-white border border-gray-200 rounded-sm shadow-sm hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out hover:bg-gray-100'
          >
            <Link href={card.link}>
              <Image
                className='rounded-t-sm w-full h-48 object-cover'
                src={card.imageUrl}
                alt={card.title}
                width={400}
                height={200}
              />
            </Link>
            <div className='p-5'>
              <Link href={card.link}>
                <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900'>
                  {card.title}
                </h5>
              </Link>
              <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
