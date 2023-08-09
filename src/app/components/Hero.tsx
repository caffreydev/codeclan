'use client';

import { FaArrowRight } from 'react-icons/fa';
import Wrapper from './Wrapper';
import { useRouter } from 'next/navigation';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { openAuth } from '@/redux/features/auth-slice';
import { AppDispatch } from '@/redux/Store';

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  const { push } = useRouter();
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const dispatch = useDispatch<AppDispatch>();

  const handleClickSignIn = () => dispatch(openAuth());

  const handleDemoLogin = async () => {
    const login = await signInWithEmailAndPassword('demouser@codeclan.uk', 'password');
    if (login) {
      push('/dashboard');

      toast.success('Authenticated as Demo user', {
        position: 'top-right',
        autoClose: 5000,
        theme: 'dark',
      });
    }
  };

  return (
    <div className='relative z-[1] -mt-14'>
      <div className='Hero'>
        <Wrapper className='relative flex min-h-[40rem] flex-col justify-center gap-6 text-center'>
          <div>
            <span className='bg-grey-t rounded-2xl border border-grey-600 bg-grey-900 px-3 py-1 text-[11px] uppercase tracking-normal text-grey-300'>
              Unlock the Power of Pairing
            </span>
            <h2 className='mx-auto flex max-w-[40rem] flex-wrap items-center justify-center text-4xl text-grey-100 md:text-7xl'>
              A better
              <span className='bg-gradient-to-r from-purple-400 to-primary bg-clip-text px-2 leading-normal text-transparent'>paired</span>
              <span className='-mb-5 -mt-10 bg-gradient-to-r from-purple-400 to-primary bg-clip-text pr-2 leading-normal text-transparent'>programming</span>
              experience
            </h2>
          </div>
          <p className='font-mono text-xl text-grey-400'>“Two heads are better than one.”</p>
          <div className='flex items-center justify-center gap-5'>
            <button
              className='group relative mt-4 inline-flex items-center justify-start overflow-hidden rounded-md border border-grey-500 bg-grey-900 py-3 pl-4 pr-12 tracking-normal text-white transition-all duration-150 ease-in-out hover:border-primary hover:border-transparent hover:pl-10 hover:pr-6'
              onClick={handleClickSignIn}>
              <span className='absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-purple-400 to-primary transition-all duration-150 ease-in-out group-hover:h-full'></span>
              <span className='absolute right-1 pr-4 text-sm duration-200 ease-out group-hover:translate-x-10'>
                <FaArrowRight />
              </span>
              <span className='absolute left-1 -translate-x-10  pl-2.5 text-sm text-white duration-200 ease-out group-hover:translate-x-0'>
                <FaArrowRight />
              </span>
              <span className='relative w-full transition-colors duration-200 ease-in-out group-hover:text-white'>Login/ Sign up</span>
            </button>

            <button
              className='group relative mt-4 inline-flex items-center justify-start overflow-hidden rounded-md border border-grey-500 bg-grey-900 py-3 pl-4 pr-12 tracking-wider text-white transition-all duration-150 ease-in-out hover:border-primary hover:border-transparent hover:pl-10 hover:pr-6'
              onClick={handleDemoLogin}>
              <span className='absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-grey-600 to-grey-400 transition-all duration-150 ease-in-out group-hover:h-full'></span>
              <span className='absolute right-1 pr-4 text-sm duration-200 ease-out group-hover:translate-x-10'>
                <FaArrowRight />
              </span>
              <span className='absolute left-1 -translate-x-10  pl-2.5 text-sm text-white duration-200 ease-out group-hover:translate-x-0'>
                <FaArrowRight />
              </span>
              <span className='relative w-full transition-colors duration-200 ease-in-out group-hover:text-white'>Demo Login</span>
            </button>
          </div>
        </Wrapper>
      </div>
      <img src='/bg-right.svg' alt='smoke effect right side' className='top-0 bg-right' />
      <img src='/bg-left.svg' alt='smoke effect left side' className='top-0 bg-left' />
    </div>
  );
};
export default Hero;
