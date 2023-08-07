import Wrapper from './components/Wrapper';
import Hero from './components/Hero';
import Image from 'next/image';
import { BiAtom } from 'react-icons/bi';
export default function Home() {
  return (
    <>
      <main className='bg-grey-900'>
        <Hero />

        <Wrapper className='relative z-[1] -mt-12 flex items-center justify-center'>
          <Image src='/playground.png' width={644} height={460} alt='Code editor' className='transform transition-all duration-700 hover:-translate-y-10' />
        </Wrapper>

        <section className='Divider relative z-[1] -mt-64 h-full bg-grey-900'>
          <span className='Divider-line absolute top-0 h-[1px] w-full opacity-25'></span>
          <span className='gradients-right gradients-left opacity-30'></span>
          <span className='gradients-right gradients-right opacity-30'></span>

          <Wrapper className='z-[2] flex h-full flex-col items-center justify-center gap-16 '>
            <h3 className='text-5xl'>What is pair programming?</h3>
            <div className='z-50 flex max-w-3xl flex-col gap-5 text-center font-mono'>
              <p className='text-lg tracking-tight text-grey-300'>
                Pair programming is a common software development technique where two developers work on the same code, together, at the same computer.{' '}
              </p>
              <p className='text-lg tracking-tight text-grey-300'>
                One developer takes the role of 'driver' – this person takes ownership of the keyboard and mouse and physically writes the code. Meanwhile, the
                other developer – the 'navigator' – concentrates on the 'big picture' and the direction the code is going, reviewing and revising the code the
                driver is writing.
              </p>
            </div>
            {/* <img src='pair-programming.svg' className='absolute w-96' alt='pair programming'></img> */}
          </Wrapper>
        </section>

        <section className='flex gap-5 py-20 text-center'>
          <Wrapper className='flex h-full flex-col items-center gap-16'>
            <h3 className='text-5xl'>Advantages of pair programming</h3>
            <div className='flex justify-center gap-10'>
              <div className='flex h-64 w-1/3 flex-col items-center justify-center rounded-lg border border-gray-800 p-2'>
                <span>
                  <BiAtom className='rounded-full border border-indigo-600 text-6xl' />
                </span>
                <h4 className='p-4 text-lg text-grey-150'>Knowledge sharing</h4>
                <p className='font-mono text-grey-300'>
                  Pair programming can ensure that one or two people aren’t holding all the knowledge critical to a project.
                </p>
              </div>
              <div className='flex h-64 w-1/3 flex-col items-center justify-center rounded-lg border border-gray-800 p-2'>
                <span>
                  <BiAtom className='rounded-full border border-indigo-600 text-6xl' />
                </span>
                <h4 className='p-4 text-lg text-grey-150'>Thinking</h4>
                <p className='font-mono text-grey-300'>Just having someone to talk through a problem with can be key to coming up with a solution.</p>
              </div>
            </div>
            <div className='flex justify-center gap-10'>
              <div className='flex h-64 w-1/3 flex-col items-center justify-center rounded-lg border border-gray-800 p-2'>
                <span>
                  <BiAtom className='rounded-full border border-indigo-600 text-6xl' />
                </span>
                <h4 className='p-4 text-lg text-grey-150'>Focus</h4>
                <p className='font-mono text-grey-300'>Having another person with you and changing roles often can help keep you fresh and focused.</p>
              </div>
              <div className='flex h-64 w-1/3 flex-col items-center justify-center rounded-lg border border-gray-800 p-2'>
                <span>
                  <BiAtom className='rounded-full border border-indigo-600 text-6xl' />
                </span>
                <h4 className='p-4 text-lg text-grey-150'>Accuracy</h4>
                <p className='font-mono text-grey-300'>Having someone quality checking the code as it’s being written will improve accuracy.</p>
              </div>
            </div>
          </Wrapper>
        </section>
        <section className='relative'>
          <span className='gradients-top-r gradients_top-l absolute bottom-[-200px] -z-10 h-60 w-full opacity-20'></span>
        </section>
      </main>
    </>
  );
}
