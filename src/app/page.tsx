import Image from 'next/image';
import Link from 'next/link';
import InfoCard1 from './_components/info-card-1';
import InfoCard2 from './_components/info-card-2';
import { inter } from './fonts';
import { TextFadeInBottom } from '@/components/TextFadeInBottom';
import FadeIn from '@/components/FadeIn';

export default function Home() {
  return (
    <div className='lg:p-8 p-5'>
      <header>
        <FadeIn duration={2}>
          <h3 className='font-bold text-sm lg:text-2xl'>MICHAEL HEALY</h3>
        </FadeIn>
      </header>
      <main className='flex flex-col gap-8 mt-9 lg:mt-10'>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-8'>
          <div className='lg:col-span-3 order-last lg:order-none bg-[#F9F9F9] rounded-3xl overflow-clip p-6 lg:p-8 py-12 lg:py-8 flex flex-col justify-between hero-gradient'>
            <div className='hidden lg:block grow pt-12' />
            <div className='max-w-lg'>
              <h1 className='text-2xl lg:text-[40px] lg:leading-[49px] font-semibold'>
                <TextFadeInBottom y={100} staggerChildren={0.1} text="Hi! I'm Michael Healy - Co-founder of Unit," />
              </h1>
              <p className={'mt-3 text-xs lg:text-lg ' + inter.className}>
                <TextFadeInBottom
                  staggerChildren={0}
                  y={30}
                  delay={1}
                  text='the leading token builder focused on powering the token economy using the Unit Network blockchain.'
                />
              </p>
            </div>
            <div className='grow flex flex-col justify-end'>
              <div className='flex flex-col lg:flex-row gap-6'>
                <FadeIn duration={2}>
                  <div className='rounded-full bg-foreground text-background w-fit h-fit font-semibold px-4 py-2 lg:px-6 lg:py-3 text-sm lg:text-base text-nowrap mt-10 lg:mt-0'>
                    Connect
                  </div>
                </FadeIn>
                <div className='flex gap-2 items-center flex-wrap'>
                  <FadeIn duration={2}>
                    <Link
                      href='https://x.com/michaelhealyco'
                      target='_blank'
                      className='rounded-full bg-background h-9 w-9 lg:h-12 lg:w-12 flex items-center justify-center hover:bg-gray-100 transition'
                    >
                      <Image src='/twitter.svg' alt='X' width={24} height={24} className='block lg:hidden' />
                      <Image src='/twitter.svg' alt='X' width={32} height={32} className='hidden lg:block' />
                    </Link>
                  </FadeIn>
                  <FadeIn duration={2}>
                    <Link
                      href='https://t.me/michaelhealy'
                      target='_blank'
                      className='rounded-full bg-background h-9 w-9 lg:h-12 lg:w-12 flex items-center justify-center hover:bg-gray-100 transition'
                    >
                      <Image src='/telegram.svg' alt='Telegram' width={26} height={26} className='block lg:hidden' />
                      <Image src='/telegram.svg' alt='Telegram' width={32} height={32} className='hidden lg:block' />
                    </Link>
                  </FadeIn>
                  <FadeIn duration={2}>
                    <Link
                      href='https://www.instagram.com/michaelhealyco'
                      target='_blank'
                      className='rounded-full bg-background h-9 w-9 lg:h-12 lg:w-12 flex items-center justify-center hover:bg-gray-100 transition'
                    >
                      <Image src='/instagram.svg' alt='Instagram' width={26} height={26} className='block lg:hidden' />
                      <Image src='/instagram.svg' alt='Instagram' width={30} height={30} className='hidden lg:block' />
                    </Link>
                  </FadeIn>
                  <FadeIn duration={2}>
                    <Link
                      href='https://www.linkedin.com/in/michaelhealyco/'
                      target='_blank'
                      className='rounded-full bg-background h-9 w-9 lg:h-12 lg:w-12 flex items-center justify-center hover:bg-gray-100 transition'
                    >
                      <Image src='/linkedin.svg' alt='LinkedIn' width={20} height={20} className='block lg:hidden' />
                      <Image src='/linkedin.svg' alt='LinkedIn' width={24} height={24} className='hidden lg:block' />
                    </Link>
                  </FadeIn>
                  <FadeIn duration={2}>
                    <Link
                      href='https://www.youtube.com/@michaelhealyco'
                      target='_blank'
                      className='rounded-full bg-background h-9 w-9 lg:h-12 lg:w-12 flex items-center justify-center hover:bg-gray-100 transition'
                    >
                      <Image src='/youtube.svg' alt='YouTube' width={28} height={28} className='block lg:hidden' />
                      <Image src='/youtube.svg' alt='YouTube' width={32} height={32} className='hidden lg:block' />
                    </Link>
                  </FadeIn>
                  <FadeIn duration={2}>
                    <Link
                      href='https://www.tiktok.com/@michaelhealyco'
                      target='_blank'
                      className='rounded-full bg-background h-9 w-9 lg:h-12 lg:w-12 flex items-center justify-center hover:bg-gray-100 transition'
                    >
                      <Image src='/tiktok.svg' alt='TikTok' width={20} height={20} className='block lg:hidden' />
                      <Image src='/tiktok.svg' alt='TikTok' width={28} height={28} className='hidden lg:block' />
                    </Link>
                  </FadeIn>
                  <FadeIn duration={2}>
                    <Link
                      href='https://www.threads.net/@michaelhealyco'
                      target='_blank'
                      className='rounded-full bg-background h-9 w-9 lg:h-12 lg:w-12 flex items-center justify-center hover:bg-gray-100 transition'
                    >
                      <Image src='/threads.svg' alt='Threads' width={22} height={22} className='block lg:hidden' />
                      <Image src='/threads.svg' alt='Threads' width={28} height={28} className='hidden lg:block' />
                    </Link>
                  </FadeIn>
                  <FadeIn duration={2}>
                    <Link
                      href='https://app.unit.network/register/michael'
                      target='_blank'
                      className='rounded-full bg-background h-9 w-9 lg:h-12 lg:w-12 flex items-center justify-center hover:bg-gray-100 transition'
                    >
                      <Image src='/unit.svg' alt='Unit Network' width={18} height={18} className='block lg:hidden' />
                      <Image src='/unit.svg' alt='Unit Network' width={24} height={24} className='hidden lg:block' />
                    </Link>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:col-span-2 relative h-[24rem] lg:h-[40rem] rounded-3xl overflow-clip'>
            <Image src='/michael-healy.webp' alt='Michael Healy' fill className='object-cover' priority />
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-8'>
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 lg:col-span-3'>
            <div className='lg:col-span-2 relative rounded-3xl overflow-clip h-[24rem] lg:h-[28rem]'>
              <Image src='/michael.webp' alt='Michael Healy' fill className='object-cover' priority />
            </div>
            <InfoCard2 inter={inter} />
          </div>
          <InfoCard1 inter={inter} />
        </div>
      </main>
      <footer className='flex justify-between lg:items-center px-0 lg:px-16 mt-14 lg:mt-24'>
        <h3 className='font-bold text-sm lg:text-2xl text-[#A1A1A1] text-nowrap'>MICHAEL HEALY</h3>
        <div className='flex gap-1 lg:gap-2 items-center flex-wrap max-w-[8rem] sm:max-w-none lg:max-w-[14rem] lg:max-w-none'>
          <Link
            href='https://x.com/michaelhealyco'
            target='_blank'
            className='h-7 w-7 lg:h-12 lg:w-12 flex items-center justify-center brightness-[3.7]'
          >
            <Image src='/twitter.svg' alt='X' width={18} height={18} className='block lg:hidden' />
            <Image src='/twitter.svg' alt='X' width={32} height={32} className='hidden lg:block' />
          </Link>
          <Link
            href='https://t.me/michaelhealy'
            target='_blank'
            className='h-7 w-7 lg:h-12 lg:w-12 flex items-center justify-center brightness-[3.7]'
          >
            <Image src='/telegram.svg' alt='Telegram' width={20} height={20} className='block lg:hidden' />
            <Image src='/telegram.svg' alt='Telegram' width={32} height={32} className='hidden lg:block' />
          </Link>
          <Link
            href='https://www.instagram.com/michaelhealyco'
            target='_blank'
            className='h-7 w-7 lg:h-12 lg:w-12 flex items-center justify-center brightness-[3.7]'
          >
            <Image src='/instagram.svg' alt='Instagram' width={20} height={20} className='block lg:hidden' />
            <Image src='/instagram.svg' alt='Instagram' width={30} height={30} className='hidden lg:block' />
          </Link>
          <Link
            href='https://www.linkedin.com/in/michaelhealyco/'
            target='_blank'
            className='h-7 w-7 lg:h-12 lg:w-12 flex items-center justify-center brightness-[3.7]'
          >
            <Image src='/linkedin.svg' alt='LinkedIn' width={14} height={14} className='block lg:hidden' />
            <Image src='/linkedin.svg' alt='LinkedIn' width={24} height={24} className='hidden lg:block' />
          </Link>
          <Link
            href='https://www.youtube.com/@michaelhealyco'
            target='_blank'
            className='h-7 w-7 lg:h-12 lg:w-12 flex items-center justify-center brightness-[3.7]'
          >
            <Image src='/youtube.svg' alt='YouTube' width={22} height={22} className='block lg:hidden' />
            <Image src='/youtube.svg' alt='YouTube' width={32} height={32} className='hidden lg:block' />
          </Link>
          <Link
            href='https://www.tiktok.com/@michaelhealyco'
            target='_blank'
            className='h-7 w-7 lg:h-12 lg:w-12 flex items-center justify-center brightness-[3.7]'
          >
            <Image src='/tiktok.svg' alt='TikTok' width={14} height={14} className='block lg:hidden' />
            <Image src='/tiktok.svg' alt='TikTok' width={28} height={28} className='hidden lg:block' />
          </Link>
          <Link
            href='https://www.threads.net/@michaelhealyco'
            target='_blank'
            className='h-7 w-7 lg:h-12 lg:w-12 flex items-center justify-center brightness-[3.7]'
          >
            <Image src='/threads.svg' alt='Threads' width={16} height={16} className='block lg:hidden' />
            <Image src='/threads.svg' alt='Threads' width={28} height={28} className='hidden lg:block' />
          </Link>
          <Link
            href='https://app.unit.network/register/michael'
            target='_blank'
            className='h-7 w-7 lg:h-12 lg:w-12 flex items-center justify-center brightness-[3.7]'
          >
            <Image src='/unit.svg' alt='Unit Network' width={14} height={14} className='block lg:hidden' />
            <Image src='/unit.svg' alt='Unit Network' width={24} height={24} className='hidden lg:block' />
          </Link>
        </div>
      </footer>
    </div>
  );
}
