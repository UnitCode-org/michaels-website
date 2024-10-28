'use client';

import { TextFadeInBottom } from '@/components/TextFadeInBottom';
import { NextFont } from 'next/dist/compiled/@next/font';
import React from 'react';

function InfoCard2({ inter }: { inter: NextFont }) {
  const [clicked, setClicked] = React.useState(false);

  return (
    <div
      className='rounded-3xl overflow-clip h-[24rem] md:h-[28rem] transition duration-1000 group card-gradient-2 md:col-span-2'
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
            'text-foreground font-semibold text-2xl md:text-4xl max-w-lg group-hover:opacity-0 transition duration-1000' +
            (clicked ? ' opacity-0' : '')
          }
        >
          <TextFadeInBottom y={100} staggerChildren={0.1} onScroll text='Building Useful & Successful Businesses' />
        </h2>
        <p
          className={
            'absolute opacity-0 group-hover:opacity-100 text-background pr-8 transition duration-1000 text-xs md:text-base ' +
            inter.className +
            (clicked ? ' opacity-100' : '')
          }
        >
          Michael has been in the crypto and blockchain industry since 2010 and has built several successful businesses
          with exits, ranging from an encrypted peer-to-peer video conferencing technology, used by millions of users
          globally, one of the UK’s largest student social networks, the Wikileaks android application and many mobile
          apps used by millions of users worldwide.
          <br />
          <br />
          Alongside starting and growing businesses, Michael has advised and supported startups, investors and
          corporates in Asia, Europe, Middle East and Latin America. He was a finalist of the Thiel Fellowship by Peter
          Thiel and awarded the Silver medal in the Mathematics Olympiad.
        </p>
      </div>
    </div>
  );
}

export default InfoCard2;