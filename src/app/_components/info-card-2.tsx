'use client';

import { TextFadeInBottom } from '@/components/TextFadeInBottom';
import { NextFont } from 'next/dist/compiled/@next/font';
import React from 'react';

function InfoCard2({ inter }: { inter: NextFont }) {
  return (
    <div className='rounded-3xl overflow-clip h-[28rem] md:h-[28rem] transition duration-1000 group card-gradient-2 md:col-span-3'>
      <div className={'relative p-5 md:p-8 flex flex-col justify-end transition duration-1000 h-full'}>
        <h3 className='font-semibold text-2xl xl:text-3xl'>
          <TextFadeInBottom y={100} staggerChildren={0.1} text='Building Useful & Successful Businesses' onScroll />
        </h3>
        <p className={inter.className + ' text-xs xl:text-sm mt-4 md:mt-6'}>
          <TextFadeInBottom
            y={30}
            delay={0.4}
            text='Michael has been in the crypto and blockchain industry since 2010 and has built several successful businesses
          with exits, ranging from an encrypted peer-to-peer video conferencing technology, used by millions of users
          globally, one of the UK’s largest student social networks, the Wikileaks android application and many mobile
          apps used by millions of users worldwide.'
            onScroll
          />
          <br />
          <TextFadeInBottom
            y={30}
            delay={1.2}
            text='Alongside starting and growing businesses, Michael has advised and supported startups, investors and
          corporates in Asia, Europe, Middle East and Latin America. He was a finalist of the Thiel Fellowship by Peter
          Thiel and awarded the Silver medal in the Mathematics Olympiad.'
            onScroll
          />
        </p>
      </div>
    </div>
  );
}

export default InfoCard2;