import Image from 'next/image';
import React from 'react';

interface CardProps {
    title: string;
    description: string;
    link: string;
    imageUrl: string;
    image: string;
    promo: string;
}

const PromoCard: React.FC<CardProps> = ({ title, description, link, imageUrl, image,promo }) => {
    return (
        <div className="relative rounded-lg shadow md:max-w-[500px] md:min-w-[500px] md:max-h-[250px] md:min-h-[250px] ">
            <Image src={imageUrl} alt="Background Image" layout="fill" objectFit="cover" className="rounded-lg" />
            <div className='flex   '>
                <div className="relative z-10 pt-2 md:pt-10 pl-5 ">
                <a href={link} className="mb-2 inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-md hover:bg-green-800  ">
                        {promo}
                    </a>
                    <a href={link}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{title}</h5>
                    </a>
                    <p className="mb-2 font-normal text-gray-700">{description}</p>
                    <a href={link} className=" mb-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600  hover:bg-green-800  ">
                        Order Now
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
                <div className=' z-10 flex items-end justify-end'>   
                        <img src={image} alt="right image" className='z-10 max-h-full flex items-end justify-end' />
                </div>
            </div>
        </div>
    );
};

export default PromoCard;
