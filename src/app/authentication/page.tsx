'use client';

import React from 'react';
import { auth } from '@/firebase/firebase';
import { changePage, closeAuth, openAuth } from '@/redux/features/auth-slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/Store';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type pageProps = {};

const page: React.FC<pageProps> = () => {
  const { push } = useRouter();
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const dispatch = useDispatch<AppDispatch>();

  const handleClickSignIn = () => {
    dispatch(openAuth());
    dispatch(changePage('login'));
  };

  const handleDemoLogin = async () => {
    const login = await signInWithEmailAndPassword('demouser@codeclan.uk', 'password');
    if (login) {
      push('/dashboard');
    }
  };

  return (
    <div className='relative'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex h-[calc(100vh-5rem)] flex-col items-center justify-center'>
          <h3 className='text-2xl'>Create an account or press the Demo Login button to start exploring</h3>
          <Image src='/codeclan-logo.png' alt='codeclan logo' width={400} height={400} />

          <div className='mt-3 flex gap-24'>
            <button onClick={handleClickSignIn} className='rounded bg-grey-100 px-4 py-2 font-bold text-grey-500 hover:bg-primary hover:text-grey-100'>
              Login / Sign Up
            </button>
            <button onClick={handleDemoLogin} className='rounded bg-grey-300 px-4 py-2 font-bold text-white hover:bg-primary'>
              Demo Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
