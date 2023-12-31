'use client';

import React, { useEffect, useState } from 'react';
import { auth } from '@/firebase/firebase';
import { changePage, closeAuth } from '@/redux/features/auth-slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/Store';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const { push } = useRouter();
  const [inputs, setInputs] = useState({ email: '', password: '' });

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const dispatch = useDispatch<AppDispatch>();

  const handleForgot = () => {
    dispatch(changePage('forgotPassword'));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password) {
      return toast.error('You must fill in all fields!', {
        position: 'top-right',
        autoClose: 5000,
        theme: 'dark',
      });
    }
    try {
      const login = await signInWithEmailAndPassword(inputs.email, inputs.password);
      if (!login) {
        return;
      }
      dispatch(closeAuth());
      push('/dashboard');
    } catch (error: any) {
      toast.error('Failed login!', {
        position: 'top-right',
        autoClose: 5000,
        theme: 'dark',
      });
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error.message.replace('Firebase: Error ', 'Failed login! ').replace('Firebase: ', 'Failed login! '), {
        position: 'top-right',
        autoClose: 5000,
        theme: 'dark',
      });
    }
  }, [error]);

  return (
    <form className='Modal-body' onSubmit={handleLogin}>
      <h3 className='Modal-heading'>Authentication</h3>
      <div className='mb-6 flex gap-5'>
        <label className='label-Modal'>
          <input type='email' name='email' id='email' onChange={handleChange} className='input-Modal peer' placeholder='email' />
          <span className='span-Modal text-grey-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-gray-300'>
            Email
          </span>
        </label>
        <label htmlFor='password' className='label-Modal'>
          <input onChange={handleChange} type='password' name='password' id='password' className='input-Modal peer' placeholder='password' />
          <span className='span-Modal text-grey-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-gray-300'>
            Password
          </span>
        </label>
      </div>
      <div className='flex flex-col gap-3'>
        <button className='rounded bg-primary px-4 py-2 text-grey-100 outline-primary hover:bg-opacity-80' type='submit'>
          Login
        </button>
        <a href='#' className='text-sm text-grey-200 hover:text-grey-100' onClick={handleForgot}>
          Forgot Password?
        </a>
      </div>
    </form>
  );
};

export default Login;
