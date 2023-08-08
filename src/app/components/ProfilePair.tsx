'use client';

import React from 'react';
import { useAppSelector } from '@/redux/Store';
import { IoClose } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/Store';
import { closeProfilePair } from '@/redux/features/profilePair-slice';

type ProfilePairProps = {};

const ProfilePair: React.FC<ProfilePairProps> = () => {
  const dispatch = useDispatch<AppDispatch>();

  const isOpen = useAppSelector((state) => state.profilePairReducer.value.isOpen);

  return (
    isOpen && (
      <>
        <div className='Modal rounded-t-lg'>
          <header className='relative rounded-t-lg bg-grey-800'>
            <button className='absolute inset-y-0 right-0 p-5 text-xl transition hover:scale-125' onClick={() => dispatch(closeProfilePair())}>
              <IoClose />
            </button>
          </header>
          <div className='rounded-b-lg border border-grey-700 bg-grey-700 p-10'>
            <h1>Our Amazing Coders</h1>
            <button>Post to @everyone</button>
            <ul>
              <li className='flex justify-between'>
                <p>damianSux</p>
                <button className='rounded border'>
                  Pair up
                </button>
              </li>
              <li className='flex justify-between'>
                <p>joe</p>
                <button className='rounded border'>
                  Pair up
                </button>
              </li>
              <li className='flex justify-between'>
                <p>jess</p>
                <button className='rounded border'>
                  Pair up
                </button>
              </li>
              <li className='flex justify-between'>
                <p></p>
                <button className='rounded border'>
                  Pair up
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className='Modal-overlay' onClick={() => dispatch(closeProfilePair())}></div>
      </>
    )
  );
};

export default ProfilePair;
