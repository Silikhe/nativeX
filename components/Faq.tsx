'use client'

import React, { useState } from 'react'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqItems = [
    {
      question: 'FAQ Question 1',
      answer: 'Answer to FAQ question 1.'
    },
    {
      question: 'FAQ Question 2',
      answer: 'Answer to FAQ question 2.'
    },
    {
      question: 'FAQ Question 2',
      answer: 'Answer to FAQ question 2.'
    },
    {
      question: 'FAQ Question 2',
      answer: 'Answer to FAQ question 2.'
    }
  ]

  return (
    <div className='bg-[#F4F7FA] mx-auto px-10 lg:px-40 py-20'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>FAQ</h1>
        <p className='text-gray-600 mt-2 text-lg'>
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>
      <div className='mt-20'>
        <div className='bg-white shadow-sm rounded-sm py-'>
          {faqItems.map((item, index) => (
            <div key={index} className='border-b border-gray-200 '>
              <button
                onClick={() => toggleAccordion(index)}
                className='w-full text-left px-6 py-6  hover:bg-gray-50 focus:outline-none'
              >
                <h2 className='text-xl font-semibold'>{item.question}</h2>
                <p className='text-gray-600 mt-2'>{item.answer}</p>
              </button>
              {openIndex === index && (
                <div className='p-6'>
                  <p className='text-gray-600'>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq
