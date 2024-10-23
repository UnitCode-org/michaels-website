import Image from 'next/image';
import Link from 'next/link';
import InfoCard1 from './_components/info-card-1';
import InfoCard2 from './_components/info-card-2';
import { inter } from './fonts';

export default function Home() {
  return (
    <div className='md:p-8 p-5'>
      <header>
        <h3 className='font-bold text-sm md:text-2xl'>MICHAEL HEALHY</h3>
      </header>
      <main className='flex flex-col gap-8 mt-9 md:mt-10'>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-8'>
          <div className='md:col-span-3 order-last md:order-none bg-[#F9F9F9] rounded-3xl overflow-clip p-6 md:p-8 py-12 md:py-8 flex flex-col justify-between hero-gradient'>
            <div className='hidden md:block grow pt-12' />
            <div className='max-w-lg'>
              <h1 className='text-2xl md:text-[40px] md:leading-[49px] font-semibold'>
                Hi! I&apos;m Michael Healy - Co-founder of Unit,
              </h1>
              <p className={'mt-3 text-xs md:text-lg ' + inter.className}>
                the leading token builder focused on powering the token economy using the Unit Network blockchain.
              </p>
            </div>
            <div className='grow flex flex-col justify-end'>
              <div className='flex flex-col md:flex-row gap-6'>
                <div className='rounded-full bg-foreground text-background w-fit h-fit font-semibold px-4 py-2 md:px-6 md:py-3 text-sm md:text-base text-nowrap mt-10 md:mt-0'>
                  Contact Me
                </div>
                <div className='flex gap-2 items-center flex-wrap'>
                  <Link
                    href='https://x.com/michaelhealyco'
                    target='_blank'
                    className='rounded-full bg-background h-9 w-9 md:h-12 md:w-12 flex items-center justify-center hover:bg-gray-100 transition'
                  >
                    <Image src='/twitter.svg' alt='X' width={24} height={24} className='block md:hidden' />
                    <Image src='/twitter.svg' alt='X' width={32} height={32} className='hidden md:block' />
                  </Link>
                  <Link
                    href='https://t.me/michaelhealy'
                    target='_blank'
                    className='rounded-full bg-background h-9 w-9 md:h-12 md:w-12 flex items-center justify-center hover:bg-gray-100 transition'
                  >
                    <Image src='/telegram.svg' alt='Telegram' width={26} height={26} className='block md:hidden' />
                    <Image src='/telegram.svg' alt='Telegram' width={32} height={32} className='hidden md:block' />
                  </Link>
                  <Link
                    href='https://www.instagram.com/michaelhealyco'
                    target='_blank'
                    className='rounded-full bg-background h-9 w-9 md:h-12 md:w-12 flex items-center justify-center hover:bg-gray-100 transition'
                  >
                    <Image src='/instagram.svg' alt='Instagram' width={26} height={26} className='block md:hidden' />
                    <Image src='/instagram.svg' alt='Instagram' width={30} height={30} className='hidden md:block' />
                  </Link>
                  <Link
                    href='https://www.linkedin.com/in/michaelhealyco/'
                    target='_blank'
                    className='rounded-full bg-background h-9 w-9 md:h-12 md:w-12 flex items-center justify-center hover:bg-gray-100 transition'
                  >
                    <Image src='/linkedin.svg' alt='LinkedIn' width={20} height={20} className='block md:hidden' />
                    <Image src='/linkedin.svg' alt='LinkedIn' width={24} height={24} className='hidden md:block' />
                  </Link>
                  <Link
                    href='https://www.youtube.com/@michaelhealyco'
                    target='_blank'
                    className='rounded-full bg-background h-9 w-9 md:h-12 md:w-12 flex items-center justify-center hover:bg-gray-100 transition'
                  >
                    <Image src='/youtube.svg' alt='YouTube' width={28} height={28} className='block md:hidden' />
                    <Image src='/youtube.svg' alt='YouTube' width={32} height={32} className='hidden md:block' />
                  </Link>
                  <Link
                    href='https://www.tiktok.com/@michaelhealyco'
                    target='_blank'
                    className='rounded-full bg-background h-9 w-9 md:h-12 md:w-12 flex items-center justify-center hover:bg-gray-100 transition'
                  >
                    <Image src='/tiktok.svg' alt='TikTok' width={20} height={20} className='block md:hidden' />
                    <Image src='/tiktok.svg' alt='TikTok' width={28} height={28} className='hidden md:block' />
                  </Link>
                  <Link
                    href='https://www.threads.net/@michaelhealyco'
                    target='_blank'
                    className='rounded-full bg-background h-9 w-9 md:h-12 md:w-12 flex items-center justify-center hover:bg-gray-100 transition'
                  >
                    <Image src='/threads.svg' alt='Threads' width={22} height={22} className='block md:hidden' />
                    <Image src='/threads.svg' alt='Threads' width={28} height={28} className='hidden md:block' />
                  </Link>
                  <Link
                    href='https://app.unit.network/user/michael'
                    target='_blank'
                    className='rounded-full bg-background h-9 w-9 md:h-12 md:w-12 flex items-center justify-center hover:bg-gray-100 transition'
                  >
                    <Image src='/unit.svg' alt='Unit Network' width={18} height={18} className='block md:hidden' />
                    <Image src='/unit.svg' alt='Unit Network' width={24} height={24} className='hidden md:block' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='md:col-span-2 relative h-[24rem] md:h-[40rem] rounded-3xl overflow-clip'>
            <Image src='/michael-healy.webp' alt='Michael Healy' fill className='object-cover' priority />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <InfoCard1 inter={inter} />
          <InfoCard2 inter={inter} />
        </div>
      </main>
      <footer className='flex justify-between md:items-center px-0 md:px-16 mt-14 md:mt-24'>
        <h3 className='font-bold text-sm md:text-2xl text-[#A1A1A1] text-nowrap'>MICHAEL HEALHY</h3>
        <div className='flex gap-1 md:gap-2 items-center flex-wrap max-w-[8rem] sm:max-w-none md:max-w-[14rem] lg:max-w-none'>
          <Link
            href='https://x.com/michaelhealyco'
            target='_blank'
            className='h-7 w-7 md:h-12 md:w-12 flex items-center justify-center brightness-[3.7]'
          >
            <Image src='/twitter.svg' alt='X' width={18} height={18} className='block md:hidden' />
            <Image src='/twitter.svg' alt='X' width={32} height={32} className='hidden md:block' />
          </Link>
          <Link
            href='https://t.me/michaelhealy'
            target='_blank'
            className='h-7 w-7 md:h-12 md:w-12 flex items-center justify-center brightness-[3.7]'
          >
            <Image src='/telegram.svg' alt='Telegram' width={20} height={20} className='block md:hidden' />
            <Image src='/telegram.svg' alt='Telegram' width={32} height={32} className='hidden md:block' />
          </Link>
          <Link
            href='https://www.instagram.com/michaelhealyco'
            target='_blank'
            className='h-7 w-7 md:h-12 md:w-12 flex items-center justify-center brightness-[3.7]'
          >
            <Image src='/instagram.svg' alt='Instagram' width={20} height={20} className='block md:hidden' />
            <Image src='/instagram.svg' alt='Instagram' width={30} height={30} className='hidden md:block' />
          </Link>
          <Link
            href='https://www.linkedin.com/in/michaelhealyco/'
            target='_blank'
            className='h-7 w-7 md:h-12 md:w-12 flex items-center justify-center brightness-[3.7]'
          >
            <Image src='/linkedin.svg' alt='LinkedIn' width={14} height={14} className='block md:hidden' />
            <Image src='/linkedin.svg' alt='LinkedIn' width={24} height={24} className='hidden md:block' />
          </Link>
          <Link
            href='https://www.youtube.com/@michaelhealyco'
            target='_blank'
            className='h-7 w-7 md:h-12 md:w-12 flex items-center justify-center brightness-[3.7]'
          >
            <Image src='/youtube.svg' alt='YouTube' width={22} height={22} className='block md:hidden' />
            <Image src='/youtube.svg' alt='YouTube' width={32} height={32} className='hidden md:block' />
          </Link>
          <Link
            href='https://www.tiktok.com/@michaelhealyco'
            target='_blank'
            className='h-7 w-7 md:h-12 md:w-12 flex items-center justify-center brightness-[3.7]'
          >
            <Image src='/tiktok.svg' alt='TikTok' width={14} height={14} className='block md:hidden' />
            <Image src='/tiktok.svg' alt='TikTok' width={28} height={28} className='hidden md:block' />
          </Link>
          <Link
            href='https://www.threads.net/@michaelhealyco'
            target='_blank'
            className='h-7 w-7 md:h-12 md:w-12 flex items-center justify-center brightness-[3.7]'
          >
            <Image src='/threads.svg' alt='Threads' width={16} height={16} className='block md:hidden' />
            <Image src='/threads.svg' alt='Threads' width={28} height={28} className='hidden md:block' />
          </Link>
          <Link
            href='https://app.unit.network/user/michael'
            target='_blank'
            className='h-7 w-7 md:h-12 md:w-12 flex items-center justify-center brightness-[3.7]'
          >
            <Image src='/unit.svg' alt='Unit Network' width={14} height={14} className='block md:hidden' />
            <Image src='/unit.svg' alt='Unit Network' width={24} height={24} className='hidden md:block' />
          </Link>
        </div>
      </footer>
    </div>
  );
}
