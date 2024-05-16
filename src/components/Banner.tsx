"use client"

import React, { useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';

function Banner() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.banner',
        start: '20% center',
        end: 'bottom center',
        scrub: true,
        markers: false,
      },
    });

    tl.to('.Card2', {
      y: 8,
    }).to('.Card1', {
      y: -80,
      duration: 1,
    }, '-=1');
  }, []);

  return (
    <div className='banner flex justify-center items-center ' >
    <img src="/bg1.png" alt="bg1" className='object-cover w-full h-full bg-green-300/10 absolute  pt-16 -z-10'  />
      <div className=' mx-10 md:mx-40 mt-5 pt-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='flex lg:items-center'>
            <div className=''>
              <div className='text-md-start text-sm-center'>
                <div className='flex'>

                <span className='font-bold text-4xl lg:text-6xl mb-5'>Fresh <span className='text-green-500'>Groceries Delivered</span> to Your Doorstep</span>
                </div>
                <p className='mb-6'>Get the best quality and most delicious grocery food in the world, you can get them our website. Fresh grocery every day to your family.</p>
             
                <Link href='/' className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded">
  Shop Now
</Link>

              </div>
            </div>
          </div>
          <div className='flex lg:items-end justify-end order-first md:order-2 mb-5'>
            <div className='relative'>
              <Image src="/delv4.png" alt="delv" height={1} width={520} className='flex items-end justify-end' />
              <Image src="/rev.svg" alt="Card2" height={1} width={230} className='absolute bottom-10 -left-0 w-40 md:w-[230px] md:left-10 Card2' />
              <Image src="/moto.svg" alt="Card1" height={1} width={200} className='absolute -bottom-10 right-0 md:right-10 w-36 md:w-[200px] Card1 rounded-xl shadow-md' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;