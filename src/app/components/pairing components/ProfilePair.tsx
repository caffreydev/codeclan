'use client';

import React, { useEffect, useState } from 'react';
import { useGetAllUsers } from '@/Utils/useGetAllUsers';
import Image from 'next/image';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { requestPairRequests } from '@/Utils/retrievePairRequests';
import { User } from 'firebase/auth';
import { IoClose } from 'react-icons/io5';
import pairRequest, { Request } from '@/Utils/pairRequest';
import { Kata } from '@/app/katas/katalibrary/kataLibrary';
import { toast } from 'react-toastify';

type ProfilePairProps = {
  kata: Kata;
  isOpen: boolean;
  setIsOpen: any;
};

const ProfilePair: React.FC<ProfilePairProps> = ({ kata, isOpen, setIsOpen }) => {
  const [user] = useAuthState(auth) as User[];
  const [usersRetrieved, setUsersRetrieved] = useState(false);
  const [requestRetrieved, setRequestRetrieved] = useState(false);
  const [requestSent, setRequestSent] = useState(false)
  const [disabledList, setDisabledList] = useState<Request[]>([]);
  const usersData = useGetAllUsers(setUsersRetrieved);
  const requestData = requestPairRequests(setRequestRetrieved) as Request[];

  const handlePairUp = (receiver = '') => {
    if (requestRetrieved) {
      const requestDetails: Request = {
        message: '',
        title: kata.title,
        receiver,
      };
      pairRequest(requestDetails, user, setRequestSent);
      setDisabledList(curr => {
        return [
          requestDetails,
          ...curr
        ]
      })
      if (requestSent) {
        toast.success('Request has been sent!', {
          position: 'top-right',
          autoClose: 5000,
          theme: 'dark',
        });
      }
    } else {
      toast.error('The server is a bit slow today please try again', {
        position: 'top-right',
        autoClose: 5000,
        theme: 'dark',
      });
    }
  };

  useEffect(() => {
    if (requestRetrieved) setDisabledList(requestData.filter((request) => request.sender === user.displayName));
  }, [requestRetrieved]);

  if (!usersRetrieved) {
    <p>Loading users...</p>;
  } else {
    return (
      isOpen && (
        <>
          <div className='Modal rounded-t-lg'>
            <header className='relative rounded-t-lg bg-grey-800'>
              <h1 className='p-4 pl-7 text-xl'>'Pair up with our amazing coders'</h1>
              <button className='absolute inset-y-0 right-0 p-5 text-xl transition hover:scale-125' onClick={() => setIsOpen(false)}>
                <IoClose />
              </button>
            </header>
            <div className='rounded-b-lg border border-grey-600 bg-grey-700'>
              <div className='grid-cols-[max-content_min-minmax(0, 1fr)] grid auto-rows-auto rounded-b-lg border border-grey-700 bg-grey-700 px-7 py-4'>
                <h2 className='text-3xl'>Take your pick</h2>
                <button onClick={() => handlePairUp()} className='rounded border px-2'>
                  Post to @everyone
                </button>
                <ul className='col-span-2 pt-3'>
                  {usersData?.map((user) => {
                    return (
                      <li
                        key={user.displayName}
                        className='mb-2 grid grid-cols-[max-content_1fr_max-content] items-center gap-3 rounded-lg border-none bg-grey-600 p-3'>
                        <Image
                          src={user.photoURL}
                          alt={`${user.displayName} avatar image`}
                          width={100}
                          height={100}
                          className='h-[30px] w-[30px] overflow-hidden rounded-full'
                        />
                        <p className='inline h-min align-middle'>{user.displayName}</p>
                        <button
                          onClick={() => handlePairUp(user.displayName)}
                          disabled={disabledList.some((request) => request.receiver === user.displayName)}
                          className='rounded border px-2 py-1'>
                          {disabledList.some((request) => request.receiver === user.displayName) ? 'Request Sent' : 'Pair up!'}
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
  }
};

export default ProfilePair;
