'use client';
import { kataLibrary } from '@/app/katas/katalibrary/kataLibrary';
import React, { useState } from 'react';
import PairRequest from '@/app/components/PairRequest';
import { useSearchParams } from 'next/navigation';

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
    <div>
      <h1>Send Request</h1>
      <form className='flex max-w-sm flex-col gap-3 p-6 text-grey-200' onSubmit={handleSubmit}>
        <input onChange={handleInputChange} type='text' placeholder='message' name='message' className='text-grey-300' />
        <select onChange={handleInputChange} className='cursor-pointer bg-grey-300 p-4 text-grey-100 hover:bg-grey-200' name='kata_name' id='kata_name'>
          <option value='none'></option>
          {kataLibrary.map((eachKata) => {
            return <option value={eachKata.title}>{eachKata.title}</option>;
          })}
        </select>
        <button className='bg-grey-200 text-grey-100'>Send Request</button>

        <PairRequest requestDetails={requestDetails} userId={userId} />
      </form>
    </div>
  );
}
