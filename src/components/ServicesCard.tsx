import React from 'react'

interface CardProps {
  title: string;
  desc: string;
  image: string;
}
const ServicesCard: React.FC<CardProps> =({image,title,desc}) => {
  return (
    <div>
        <div className='flex gap-2'>
            <div className='flex items-center justify-center'>
                <img src={image} alt={image} className='w-full' />
            </div>
            <div className='w-2/2'>
                <h1>{title}</h1>
                <p className='text-sm max-w-52 text-gray-500'>{desc}</p>
            </div>
        </div>
    </div>
  )
}

export default ServicesCard