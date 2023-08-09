import Wrapper from './components/Wrapper';
import Hero from './components/Hero';
import Image from 'next/image';
import { BiLaptop } from 'react-icons/bi';
import { RiCheckDoubleLine } from 'react-icons/ri';
import { SlPeople, SlBulb } from 'react-icons/sl';
import { FaArrowRight } from 'react-icons/fa';
import Footer from './components/Footer';
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <main className='bg-grey-900'>
        <Hero />

        <Wrapper className='relative z-[1] -mt-12 flex items-center justify-center'>
          <Image src='/playground.png' width={644} height={460} alt='Code editor' className='transform transition-all duration-700 hover:-translate-y-10' />
        </Wrapper>

        <section className='Divider relative z-[1] -mt-64 bg-grey-900 py-48'>
          <div className='Divider-line'></div>

          <Wrapper className='z-[2] flex flex-col items-center justify-center gap-16'>
            <h3 className='text-5xl'>What is pair programming?</h3>
            <div className='flex max-w-[62rem] flex-col items-center justify-center text-center lg:flex-row-reverse lg:text-right'>
              <img src='pair.svg' alt='Two people programming together' className='h-[32rem] max-w-full select-none' />

              <div className='z-50 flex flex-col gap-5 font-mono tracking-tight text-grey-200'>
                <p>Pair programming is a common software development technique where two developers work on the same code, together, at the same computer. </p>
                <p>
                  One developer takes the role of 'driver' – this person takes ownership of the keyboard and mouse and physically writes the code. Meanwhile,
                  the other developer – the 'navigator' – concentrates on the 'big picture' and the direction the code is going, reviewing and revising the code
                  the driver is writing.
                </p>
              </div>
            </div>
          </Wrapper>
        </section>

        <section className='relative z-[1] flex gap-5 text-center'>
          <Wrapper className='flex h-full flex-col items-center gap-16'>
            <img src='/bg-left.svg' alt='' className='-top-96 bg-left opacity-50' />
            <h3 className='text-5xl'>Advantages of pair programming</h3>
            <div className='grid max-w-[50rem] gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8'>
              <div className='flex h-64 flex-col items-center justify-center rounded-lg border border-gray-800 p-8 transition duration-700 hover:scale-105 hover:border-indigo-600 hover:border-b-primary hover:border-r-primary hover:shadow-2xl hover:shadow-slate-900'>
                <SlPeople className='text-5xl' />
                <h4 className='p-4 text-lg text-grey-150'>Knowledge sharing</h4>
                <p className='font-mono text-sm text-grey-300'>
                  Pair programming can ensure that one or two people aren’t holding all the knowledge critical to a project.
                </p>
              </div>
              <div className='flex h-64 flex-col items-center justify-center rounded-lg border border-gray-800 p-8 transition duration-700 hover:scale-105 hover:border-indigo-600 hover:border-b-primary hover:border-l-primary hover:shadow-2xl hover:shadow-slate-900'>
                <SlBulb className='text-5xl' />
                <h4 className='p-4 text-lg text-grey-150'>Thinking</h4>
                <p className='font-mono text-sm text-grey-300'>Just having someone to talk through a problem with can be key to coming up with a solution.</p>
              </div>

              <div className='flex h-64 flex-col items-center justify-center rounded-lg border border-gray-800 p-8 transition duration-700 hover:scale-105 hover:border-indigo-600 hover:border-r-primary hover:border-t-primary hover:shadow-2xl hover:shadow-slate-900'>
                <BiLaptop className='text-5xl' />
                <h4 className='p-4 text-lg text-grey-150'>Focus</h4>
                <p className='font-mono text-sm text-grey-300'>Having another person with you and changing roles often can help keep you fresh and focused.</p>
              </div>
              <div className='flex h-64 flex-col items-center justify-center rounded-lg border border-gray-800 p-8 transition duration-700 hover:scale-105 hover:border-indigo-600 hover:border-l-primary hover:border-t-primary hover:shadow-2xl hover:shadow-slate-900'>
                <RiCheckDoubleLine className='text-5xl' />
                <h4 className='p-4 text-lg text-grey-150'>Accuracy</h4>
                <p className='font-mono text-sm text-grey-300'>Having someone quality checking the code as it’s being written will improve accuracy.</p>
              </div>
            </div>
          </Wrapper>
        </section>
        <section className='Divider reverse relative py-40'>
          <div className='Divider-line'></div>

          <div className='flex flex-col items-center justify-center'>
            <h3 className='text-xl'>Getting started with pair programming, join the Code Clan!</h3>
            <Link href='/authentication'>
              <button className='group relative mt-4 inline-flex items-center justify-start overflow-hidden rounded-md border border-grey-500 bg-grey-900 py-3 pl-4 pr-12 tracking-normal text-white transition-all duration-150 ease-in-out hover:border-primary hover:border-transparent hover:pl-10 hover:pr-6'>
                <span className='absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-purple-400 to-primary transition-all duration-150 ease-in-out group-hover:h-full'></span>
                <span className='absolute right-1 pr-4 text-sm duration-200 ease-out group-hover:translate-x-10'>
                  <FaArrowRight />
                </span>
                <span className='absolute left-1 -translate-x-10  pl-2.5 text-sm text-white duration-200 ease-out group-hover:translate-x-0'>
                  <FaArrowRight />
                </span>
                <span className='relative w-full transition-colors duration-200 ease-in-out group-hover:text-white'>Login/ Sign up</span>
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
