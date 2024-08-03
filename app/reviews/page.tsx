'use client'

import React, { useEffect, useState, useRef } from 'react'
import CustomButton from '../../components/CustomButton'
import Carousel from '../../components/Carousel'

type CardData = {
  title: string
  description: string
  name: string
  company: string
  videoUrl: string
}

export default function Review () {
  const [cards, setCards] = useState<CardData[]>([])
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const reviews = [
    {
      name: 'John Doe',
      review: 'Great product, highly recommend!',
      image: '/images/dummy.jpg' // Replace with your image path
    },
    {
      name: 'Jane Smith',
      review: 'Amazing service and quality!',
      image: '/images/dummy.jpg'
    },
    {
      name: 'Jane Smith',
      review: 'Amazing service and quality!',
      image: '/images/dummy.jpg'
    },
    {
      name: 'Jane Smith',
      review: 'Amazing service and quality!',
      image: '/images/dummy.jpg'
    },
    {
      name: 'Alice Johnson',
      review: "The best experience I've had!",
      image: '/images/dummy.jpg'
    }
    // Add more reviews if needed
  ]

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.json')
      const data = await response.json()
      setCards(data)
    }

    fetchData()
  }, [])

  const handleScroll = () => {
    // Handle scroll logic here if needed
  }

  const handlePlayPause = (video: HTMLVideoElement | null) => {
    if (video) {
      if (video.paused) {
        video.play()
      } else {
        video.pause()
      }
    }
  }

  const handleLoadedMetadata = () => {
    // Logic to handle video metadata load
  }

  return (
    <main className='overflow-hidden'>
      <div className='hero text-center flex items-center justify-center h-screen px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center py-20'>
          <h1 className='hero_title text-white text-4xl sm:text-6xl font-medium'>
            Our Customer Review
          </h1>
          <p className='text-white mt-6 text-base sm:text-lg font-light'>
            With lots of unique blocks, you can easily build a page without
            coding. Build your next consultancy{' '}
            <br className='hidden sm:block' /> website within a few minutes.
          </p>
          <CustomButton
            title='Add a Review'
            containerStyles='py-3 mt-6 px-8 text-white rounded-sm text-center shadow-md bg-primary hover:bg-primary-500'
            handleClick={handleScroll}
          />
        </div>
      </div>

      {/* Grid of Cards */}
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 p-10 lg:p-40'>
        {cards.map((card, index) => (
          <div
            key={index}
            className='flex flex-col sm:flex-row shadow-sm border rounded-sm overflow-hidden'
          >
            {/* Content Section */}
            <div className='flex-1 flex flex-col justify-center p-6 sm:p-10'>
              <p className='mb-4 text-base sm:text-lg font-bold'>
                Watch Video Review
              </p>
              <h1 className='text-xl sm:text-2xl lg:text-3xl font-medium'>
                {card.title}
              </h1>
              <p className='mt-4 text-base sm:text-lg font-light'>
                {card.description}
              </p>
              <p className='mt-4 text-base sm:text-lg font-light'>
                <span className='text-primary uppercase'>{card.name}</span> |{' '}
                <span className='uppercase'>{card.company}</span>
              </p>
            </div>

            {/* Video Section */}
            <div className='relative flex-1'>
              <video
                ref={videoRef}
                className='w-full h-full object-cover'
                muted
                onClick={() => handlePlayPause(videoRef.current)}
                onLoadedMetadata={handleLoadedMetadata}
              >
                <source src={card.videoUrl} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
              <button
                className='absolute inset-0 flex items-center justify-center'
                onClick={() => handlePlayPause(videoRef.current)}
              >
                <img
                  src='/images/video_button.png' // Path to your video button image
                  alt='Play'
                  className='w-16 h-16' // Adjust the size as needed
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='bg-black w-full p-4 sm:p-10 lg:p-40'>
        <div className='pb-20 text-white text-center'>
          <h1 className='text-5xl font-bold mb-5'>
            Reviews From Recruiters
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore
            recusandae laboriosam natus, nesciunt obcaecati autem perspiciatis
            quis fuga quam? Harum totam sequi saepe assumenda repellendus! Quidem
            commodi adipisci ab!
          </p>
        </div>
        <Carousel items={reviews} />
      </div>
    </main>
  )
}
