'use client';

import { TextFadeInBottom } from '@/components/TextFadeInBottom';
import { NextFont } from 'next/dist/compiled/@next/font';
import React from 'react';

function InfoCard1({ inter }: { inter: NextFont }) {
  const [clicked, setClicked] = React.useState(false);

  return (
    <div
      className='rounded-3xl overflow-clip h-[24rem] lg:h-[28rem] transition duration-1000 group card-gradient-1 lg:col-span-2'
      onClick={() => setClicked(!clicked)}
    >
      <div className={'relative p-5 lg:p-8 flex flex-col justify-end transition duration-1000 h-full'}>
        <h3 className='font-semibold text-2xl xl:text-3xl text-background'>
          <TextFadeInBottom y={100} staggerChildren={0.1} text='Solving Wealth Inequity' onScroll />
        </h3>
        <p className={inter.className + ' text-xs xl:text-sm mt-4 xl:mt-6 text-background'}>
          <TextFadeInBottom
            y={30}
            text='His mission is to solve wealth inequity, by providing a more cooperative economy. He is focused on social
          impact and positive change through education, entrepreneurship and empowering individuals. <br /><br /> Michael is a self-taught full-stack, mobile and blockchain developer. Alongside, has design and video
          expertise which support in building useful products.'
            onScroll
          />
          <br />
        </p>
      </div>
    </div>
  );
}

export default InfoCard1;