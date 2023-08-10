'use client';
import { kataLibrary } from '@/app/katas/katalibrary/kataLibrary';
import React, { useState } from 'react';
import PairRequest from '@/app/components/PairRequest';
import { useSearchParams } from 'next/navigation';
import Wrapper from '../components/Wrapper';

export default function sendRequest() {
  const [inputDetails, setInputDetails] = useState({
    message: '',
    title: '',
  });

  const [requestDetails, setRequestDetails] = useState({});
  const userId = useSearchParams().get('user_id');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRequestDetails(inputDetails);
  };

  return (
    <Wrapper className='pb-4 sm:pb-6 md:pb-8'>
      <h2 className='my-7 text-3xl font-bold'>Send Request</h2>
      <div className='flex flex-col gap-4 rounded-lg border border-grey-600 bg-grey-700 p-4 sm:gap-6 sm:p-6 md:gap-8 md:p-8'>
        <form className='flex flex-col gap-2 lg:gap-4' onSubmit={handleSubmit}>
          <label className='label-Modal'>
            <input type='text' name='message' id='message' className='input-Modal peer' placeholder='your message here' onChange={handleInputChange} />
            <span className='span-Modal text-grey-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-gray-300'>
              Your message
            </span>
          </label>
          <select
            onChange={handleInputChange}
            className='w-full rounded-md border border-grey-500 bg-transparent p-3  text-sm text-grey-400 outline-none transition hover:border-grey-500 focus:border-grey-300 focus:text-grey-300'
            name='kata_name'
            id='kata_name'>
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
            Send Request
          </button>
          <PairRequest requestDetails={requestDetails} userId={userId} />
        </form>
      </div>
    </Wrapper>
  );
}
