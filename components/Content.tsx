'use client'

import React from 'react'
import Link from 'next/link'
import { FaQuestionCircle } from 'react-icons/fa'

const data = [
  {
    title: 'How Do I Get Started',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos inventore expedita exercitationem non, provident ut, esse ab beatae sapiente itaque voluptatem dicta repellendus. Rerum corrupti, culpa enim numquam odit dignissimos.',
    linkText: 'Click to Learn More',
    linkHref: '#',
  },
  {
    title: 'What Services Do You Offer',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos inventore expedita exercitationem non, provident ut, esse ab beatae sapiente itaque voluptatem dicta repellendus. Rerum corrupti, culpa enim numquam odit dignissimos.',
    linkText: 'Discover Our Services',
    linkHref: '#',
  },
  {
    title: 'Where Are You Located',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos inventore expedita exercitationem non, provident ut, esse ab beatae sapiente itaque voluptatem dicta repellendus. Rerum corrupti, culpa enim numquam odit dignissimos.',
    linkText: 'Find Us Here',
    linkHref: '#',
  },
  {
    title: 'How Can I Contact You',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos inventore expedita exercitationem non, provident ut, esse ab beatae sapiente itaque voluptatem dicta repellendus. Rerum corrupti, culpa enim numquam odit dignissimos.',
    linkText: 'Get In Touch',
    linkHref: '#',
  },
]

const Content = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 px-10  lg:px-40 py-20'>
      {data.map((item, index) => (
        <div key={index} className='flex items-start gap-4 group'>
          <div className='image_div'>
            <FaQuestionCircle size={20} className='text-primary' />
          </div>
          <div>
            <h5 className='text-lg font-semibold'>{item.title}</h5>
            <p className='text-gray-600 py-2'>{item.description}</p>
            <Link href={item.linkHref}>
              <span className='text-primary font-medium cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity'>
                {item.linkText}
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Content
