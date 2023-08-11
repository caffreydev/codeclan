'use client';
import { kataLibrary } from '@/app/katas/katalibrary/kataLibrary';
import React, { useState } from 'react';
import { Timestamp } from 'firebase/firestore';
import { useSearchParams, useRouter } from 'next/navigation';
import Wrapper from '../components/Wrapper';
import { useGetUser } from '@/Utils/useGetUser';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import pairRequest from '@/Utils/pairRequest';
import { toast } from 'react-toastify';

export default function sendRequest() {
  const [inputDetails, setInputDetails] = useState({
    title: '',
  });

  const [userRetrieved, setUserRetrieved] = useState(false);
  const [requestSent, setRequestSent] = useState(false);
  const userId = useSearchParams().get('user_id') as string;

  const receiver = useGetUser(userId, setUserRetrieved)?.displayName as string;
  const [user] = useAuthState(auth);

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInputDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const timeStamp = new Timestamp(Math.floor(new Date().getTime() / 1000), 0);
    const idString = `From ${user?.displayName} to ${receiver} at ${timeStamp}`;

    const requestObject = {
      title: inputDetails.title,
      receiver: receiver,
      sender: user?.displayName as string,
      id: idString,
    };

    pairRequest(requestObject, setRequestSent);
    toast.success('request sent');
  };

  return (
    <Wrapper className='pb-4 sm:pb-6 md:pb-8'>
      <h2 className='my-7 text-3xl font-bold'>Send request</h2>
      <div className='flex flex-col gap-4 rounded-lg border border-grey-600 bg-grey-700 p-4 sm:gap-6 sm:p-6 md:gap-8 md:p-8'>
        <form className='flex flex-col gap-2 lg:gap-4' onSubmit={handleSubmit}>
          <select
            onChange={handleInputChange}
            className='w-full rounded-md border border-grey-500 bg-transparent p-3  text-sm text-grey-400 outline-none transition hover:border-grey-500 focus:border-grey-300 focus:text-grey-300'
            name='title'
            id='title'>
            <option value='none'>Select a kata</option>
            {kataLibrary.map((eachKata) => {
              return (
                <option key={eachKata?.id} value={eachKata?.title}>
                  {eachKata?.title}
                </option>
              );
            })}
          </select>
          <button type='submit' className='rounded bg-primary px-4 py-2 text-grey-100 hover:bg-opacity-80'>
            Send request
          </button>
        </form>
      </div>
    </Wrapper>
  );
}
