'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Modal from './Modal'; // Adjust the import path as needed

const HowTo = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const videoRef = useRef(null);

    const handlePlayPause = () => {
        setIsModalOpen(true);
        setIsPlaying(!isPlaying);
    };

    const handleLoadedMetadata = () => {
        setIsVideoLoaded(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsPlaying(false);
    };

    return (
        <div className='py-24'>
            <div className='text-center py-3'>
                <h1 className='text-4xl font-bold'>How To Apply</h1>
                <p className='text-gray-600 mt-2 text-lg mx-10 text-center'>
                    With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                </p>
            </div>
            <div className='p-10 flex justify-center'>
                <div className='relative w-2/4 h-1/4 bg-black rounded-lg overflow-hidden'>
                    <video
                        ref={videoRef}
                        className='w-full h-full opacity-50'
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
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                videoUrl='/videos/intro.mp4'
            />
        </div>
    );
}

export default HowTo;



// Proper working V1


// 'use client'

// import React, { useState, useRef, useEffect } from 'react';
// import Image from 'next/image';

// const HowTo = () => {
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [isVideoLoaded, setIsVideoLoaded] = useState(false);
//     const videoRef = useRef(null);

//     const handlePlayPause = () => {
//         if (videoRef.current) {
//             if (isPlaying) {
//                 videoRef.current.pause();
//             } else {
//                 videoRef.current.play();
//             }
//             setIsPlaying(!isPlaying);
//         }
//     };

//     const handleLoadedMetadata = () => {
//         setIsVideoLoaded(true);
//     };

//     return (
//         <div className='py-24'>
//             <div className='text-center py-3'>
//                 <h1 className='text-4xl font-bold'>How To Apply</h1>
//                 <p className='text-gray-600 mt-2 text-lg mx-10 text-center'>
//                     With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
//                 </p>
//             </div>
//             <div className='p-10 flex justify-center'>
//                 <div className='relative w-2/4 h-1/4 bg-black rounded-lg overflow-hidden'>
//                     <video
//                         ref={videoRef}
//                         className='w-full h-full opacity-50'
//                         muted
//                         onClick={handlePlayPause}
//                         onLoadedMetadata={handleLoadedMetadata}
//                     >
//                         <source src='/videos/intro.mp4' type='video/mp4' />
//                         Your browser does not support the video tag.
//                     </video>
//                     {!isPlaying && (
//                         <div
//                             className='absolute inset-0 flex items-center justify-center cursor-pointer'
//                             onClick={handlePlayPause}
//                         >
//                             <Image
//                                 src='/images/video_button.svg'
//                                 alt='Play Video'
//                                 width={94}
//                                 height={94}
//                                 className='z-10'
//                             />
//                         </div>
//                     )}
//                     {!isVideoLoaded && (
//                         <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
//                             <Image
//                                 src='/images/video_button.svg'
//                                 alt='Loading Video'
//                                 width={94}
//                                 height={94}
//                             />
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default HowTo;
