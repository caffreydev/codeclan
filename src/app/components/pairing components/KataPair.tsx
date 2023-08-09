'use client';

import React, { useEffect, useState } from 'react';
import { useAppSelector } from '@/redux/Store';
import { useGetAllUsers } from '@/Utils/useGetAllUsers';
import Image from 'next/image';
import pairRequest from '@/app/components/pairing components/PairRequest';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { kataLibrary } from '@/app/katas/katalibrary/kataLibrary';

type KataPairProps = {};

type Request = {
  message: string;
  title: string;
  receiver?: string;
};

const KataPair: React.FC<KataPairProps> = () => {
  const [user] = useAuthState(auth);
  const currentProfile = '';
  const katas = kataLibrary;

  const handlePairUp = (title) => {
    const requestDetails: Request = {
      message: '',
      title,
      receiver: currentProfile,
    };
    pairRequest(requestDetails, user);
  };

  return (
    <div className='grid-cols-[max-content_min-minmax(0, 1fr)] grid auto-rows-auto rounded-b-lg border border-grey-700 bg-grey-700 py-4 px-7'>
      <h2 className='text-3xl'>Take your pick</h2>
      <ul className='col-span-2 pt-3'>
        {katas?.map((kata) => {
          return (
            <li
              key={kata.title}
              className='mb-2 grid grid-cols-[1fr_max-content] items-center gap-3 rounded-lg border-none bg-grey-600 p-3'>
              <p className='inline h-min align-middle'>{kata.title}</p>
              <button onClick={() => handlePairUp(kata.title)} className='rounded border px-2 py-1'>
                Choose
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default KataPair;
