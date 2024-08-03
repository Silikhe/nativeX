'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Modal from './Modal' // Adjust the import path as needed

interface VideoProps {
  containerClassName?: string // Optional prop for custom styles
}

const Video: React.FC<VideoProps> = ({ containerClassName }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const handlePlayPause = () => {
    setIsModalOpen(true)
    setIsPlaying(!isPlaying)
  }

  const handleLoadedMetadata = () => {
    setIsVideoLoaded(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setIsPlaying(false)
  }

  return (
    <div className='py-24 relative'>
      <div className={`${containerClassName || ''} relative`}>
        <video
          ref={videoRef}
          className='w-full h-auto opacity-50'
          muted
          onLoadedMetadata={handleLoadedMetadata}
        >
          <source src='/videos/intro.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        {!isPlaying && (
          <div
            className='absolute inset-0 flex items-center justify-center cursor-pointer'
            onClick={handlePlayPause}
          >
            <Image
              src='/images/video_button.svg'
              alt='Play Video'
              width={94}
              height={94}
              className='z-10'
            />
          </div>
        )}
        {!isVideoLoaded && (
          <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
            <Image
              src='/images/video_button.svg'
              alt='Loading Video'
              width={94}
              height={94}
            />
          </div>
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoUrl='/videos/intro.mp4'
      />
    </div>
  )
}

export default Video
