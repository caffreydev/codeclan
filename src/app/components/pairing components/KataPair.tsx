'use client';

import React, { useEffect, useState } from 'react';
import pairRequest, { Request } from '@/Utils/pairRequest';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { kataLibrary } from '@/app/katas/katalibrary/kataLibrary';
import { User } from '../../../types/firestoreTypes';
import { toast } from 'react-toastify';
import { IoClose } from 'react-icons/io5';
import { requestPairRequests } from '@/Utils/retrievePairRequests';

type KataPairProps = {
  receiver: string | undefined;
  setIsOpen: any;
  isOpen: boolean;
};

const KataPair: React.FC<KataPairProps> = ({receiver, setIsOpen, isOpen}) => {
  const [user] = useAuthState(auth);
  const [requestSent, setRequestSent] = useState(false)
  const [requestRetrieved, setRequestRetrieved] = useState(false)
  const [disabledList, setDisabledList] = useState<Request[]>([]);
  const requestData = requestPairRequests(setRequestRetrieved) as Request[];
  const katas = kataLibrary;

  const handlePairUp = (title: string) => {
    if (title && receiver && user) {
      const requestDetails: Request = {
        message: '',
        title,
        receiver,
      };
      pairRequest(requestDetails, user, setRequestSent);
      setDisabledList(curr => {
        return [
          requestDetails,
          ...curr
        ]
      })
    } else {
      toast.error('The server is a bit slow today please try again', {
        position: 'top-right',
        autoClose: 5000,
        theme: 'dark',
      });
    }
  };

  useEffect(() => {
    if (requestRetrieved) setDisabledList(requestData.filter((request) => request.sender === user?.displayName));
  }, [requestRetrieved]);

  return (
    isOpen && (
      <>
        <div className='Modal rounded-t-lg'>
          <header className='relative rounded-t-lg bg-grey-800'>
            <h1 className='text-xl pl-7 p-4'>Pick their brains with these katas</h1>
            <button className='absolute inset-y-0 right-0 p-5 text-xl transition hover:scale-125' onClick={() => setIsOpen(false)}>
              <IoClose />
            </button>
          </header>
          <div className='rounded-b-lg border border-grey-600 bg-grey-700'>
          <div className='grid-cols-[max-content_min-minmax(0, 1fr)] grid auto-rows-auto rounded-b-lg border border-grey-700 bg-grey-700 px-7 py-4'>
            <h2 className='text-3xl'>Take your pick</h2>
            <ul className='col-span-2 pt-3'>
              {katas?.map((kata) => {
                return (
                  <li key={kata.title} className='mb-2 grid grid-cols-[1fr_max-content] items-center gap-3 rounded-lg border-none bg-grey-600 p-3'>
                    <p className='inline h-min align-middle'>{kata.title}</p>
                    <button 
                      onClick={() => handlePairUp(kata.title)} 
                      className='rounded border px-2 py-1'
                      disabled={disabledList.some((request) => request.title === kata.title)}
                    >
                      {disabledList.some((request) => request.title === kata.title) ? 'Request Sent' : 'Choose!'}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          </div>
        </div>
        <div className='Modal-overlay' onClick={() => setIsOpen(false)}></div>
      </>
    )
    
  );
};

export default KataPair;
