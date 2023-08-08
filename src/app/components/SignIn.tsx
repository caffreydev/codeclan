import { AppDispatch } from '@/redux/Store';
import { openAuth } from '@/redux/features/auth-slice';
import { useDispatch } from 'react-redux';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

type SignInProps = {};

const SignIn: React.FC<SignInProps> = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClickSignIn = () => dispatch(openAuth());
  return (
    <button className='group relative inline-flex items-center justify-center overflow-hidden rounded-md p-[1px]' onClick={handleClickSignIn}>
      <span className='absolute h-full w-full bg-gradient-to-r from-primary to-purple-400 group-hover:from-primary group-hover:to-purple-400'></span>
      <span className='duration-400 relative rounded-md bg-grey-800 px-3 py-1 transition-all ease-out group-hover:bg-opacity-0'>
        <span className='relative flex items-center justify-center gap-2 text-sm tracking-wider text-grey-100'>
          <FaArrowRight className='text-xs' />
          <span>Log in</span>
        </span>
      </span>
    </button>
  );
};
export default SignIn;
