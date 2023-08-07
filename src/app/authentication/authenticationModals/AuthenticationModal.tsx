'use client';

import React from 'react';
import { useAppSelector } from '@/redux/Store';
import { IoClose } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/Store';
import { closeAuth, openAuth, changePage } from '@/redux/features/auth-slice';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import CreateAccount from './CreateAccount';

type AuthenticationModalProps = {};

const AuthenticationModal: React.FC<AuthenticationModalProps> = () => {
  const dispatch = useDispatch<AppDispatch>();

  const page = useAppSelector((state) => state.authModalStateReducer.value.page);

  const isOpen = useAppSelector((state) => state.authModalStateReducer.value.isOpen);

  return (
    isOpen && (
      <>
        <div className='Modal rounded-t-lg'>
          <header className='relative rounded-t-lg bg-grey-800'>
            <div className='flex p-4 pb-0'>
              <button
                onClick={() => {
                  dispatch(changePage('login'));
                }}
                className={`-mb-[1px] rounded-t-md border-2 border-transparent p-2 px-4 ${page === 'login' ? 'bg-grey-700' : 'hover:border-b-primary'}`}>
                Login
              </button>
              <button
                onClick={() => {
                  dispatch(changePage('createAccount'));
                }}
                className={`-mb-[1px] rounded-t-md border-2 border-transparent p-2 px-4 ${
                  page === 'createAccount' ? 'bg-grey-700' : 'hover:border-b-primary'
                }`}>
                Sign Up
              </button>
            </div>
            <button className='absolute inset-y-0 right-0 p-5 text-xl transition hover:scale-125' onClick={() => dispatch(closeAuth())}>
              <IoClose />
            </button>
          </header>
          <div className='rounded-b-lg border border-grey-600 bg-grey-700'>
            {page === 'forgotPassword' ? <ForgotPassword /> : page === 'createAccount' ? <CreateAccount /> : <Login />}
          </div>
        </div>
        <div className='Modal-overlay' onClick={() => dispatch(closeAuth())}></div>
      </>
    )
  );
};

export default AuthenticationModal;
