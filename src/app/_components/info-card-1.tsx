'use client';

import { TextFadeInBottom } from '@/components/TextFadeInBottom';
import { NextFont } from 'next/dist/compiled/@next/font';
import React from 'react';

function InfoCard1({ inter }: { inter: NextFont }) {
  const [clicked, setClicked] = React.useState(false);

  return (
    <div
      className='rounded-3xl overflow-clip h-[24rem] md:h-[28rem] transition duration-1000 group card-gradient-1'
      onClick={() => setClicked(!clicked)}
    >
      <div
        className={
          'relative p-5 md:p-8 flex flex-col justify-end group-hover:bg-[#2C2C2E] transition duration-1000 h-full' +
          (clicked ? ' bg-[#2C2C2E]' : '')
        }
      >
        <h2
          className={
            'text-background font-semibold text-2xl md:text-4xl max-w-sm group-hover:opacity-0 transition duration-1000' +
            (clicked ? ' opacity-0' : '')
          }
        >
          <TextFadeInBottom y={100} staggerChildren={0.1} text='Solving Wealth Inequity' onScroll />
        </h2>
        <p
          className={
            'absolute opacity-0 group-hover:opacity-100 text-background pr-8 transition duration-1000 text-xs md:text-base ' +
            inter.className +
            (clicked ? ' opacity-100' : '')
          }
        >
          His mission is to solve wealth inequity, by providing a more cooperative economy. He is focused on social
          impact and positive change through education, entrepreneurship and empowering individuals.
          <br />
          <br />
          Michael is a self-taught full-stack, mobile and blockchain developer. Alongside, has design and video
          expertise which support in building useful products.
        </p>
      </div>
    </div>
  );
}

export default InfoCard1;