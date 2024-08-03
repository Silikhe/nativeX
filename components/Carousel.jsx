'use client';
import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 3; // Number of items to show at once

    const handlePrev = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex <= 0 ? (Math.ceil(items.length / itemsToShow) - 1) * itemsToShow : prevIndex - itemsToShow
        );
    }, [items.length, itemsToShow]);

    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex >= (Math.ceil(items.length / itemsToShow) - 1) * itemsToShow ? 0 : prevIndex + itemsToShow
        );
    }, [items.length, itemsToShow]);

    const dots = Array.from({ length: Math.ceil(items.length / itemsToShow) });

    return (
        <div className="relative w-full">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${(currentIndex / items.length) * 100}%)`, width: `${100 * Math.ceil(items.length / itemsToShow)}%` }}
                >
                    {items.map((item, index) => (
                        <div key={index} className="flex-none" style={{ flex: `0 0 ${100 / itemsToShow}%`, padding: '0 2px' }}>
                            <div className="bg-white shadow-lg rounded-sm p-4 md:p-6">
                                <div className="relative w-full h-40 md:h-60 mb-4">
                                    <Image
                                        src={item.image}
                                        alt={`Review ${index + 1}`}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-sm"
                                    />
                                </div>
                                <h2 className="text-lg md:text-xl font-semibold mb-1">{item.name}</h2>
                                <p className="text-gray-600 text-sm md:text-base">{item.review}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 cursor-pointer"
                disabled={currentIndex <= 0}
            >
                <AiOutlineLeft size={24} />
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 cursor-pointer"
                disabled={currentIndex >= (Math.ceil(items.length / itemsToShow) - 1) * itemsToShow}
            >
                <AiOutlineRight size={24} />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3">
                {dots.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${currentIndex / itemsToShow === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                        onClick={() => setCurrentIndex(index * itemsToShow)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
