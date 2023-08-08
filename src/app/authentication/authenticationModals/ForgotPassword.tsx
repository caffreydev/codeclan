'use client';
import { auth } from '@/firebase/firebase';
import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { changePage, closeAuth } from '@/redux/features/auth-slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/Store';

type ForgotPasswordProps = {};

const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const success = await sendPasswordResetEmail(email);
      if (success) {
        toast.success('Password reset email sent! Check inbox for instructions', {
          position: 'top-center',
          autoClose: 2000,
        });
        dispatch(changePage('login'));
      }
    } catch (error: any) {
      toast.error(error.message.replace('Firebase: Error ', ' '), {
        position: 'top-right',
        autoClose: 5000,
        theme: 'dark',
      });
    }
  };
  useEffect(() => {
    if (error) {
      toast.error(error.message.replace('Firebase: Error ', 'Reset password failed! '), {
        position: 'top-right',
        autoClose: 5000,
        theme: 'dark',
      });
    }
  }, [error]);

  return (
    <form className='Modal-body' onSubmit={handleResetPassword}>
      <h3 className='Modal-heading'>Forgotten your password? :(</h3>

      <div className='flex flex-col gap-5'>
        <h4 className='text-sm text-grey-200'>Don't worry, it happens to the best of us... enter your email to get a reset link</h4>
        <label className='label-Modal'>
          <input onChange={handleChange} type='email' name='email' id='email' className='input-Modal peer' placeholder='nevillelongbottom@rememberall.com' />
          <span className='span-Modal text-grey-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-gray-300'>
            Your Email
          </span>
        </label>

        <button type='submit' className='rounded bg-primary px-4 py-2 text-grey-100 hover:bg-opacity-80'>
          Get reset link
        </button>
      </div>
    </form>
  );
};
export default ForgotPassword;
