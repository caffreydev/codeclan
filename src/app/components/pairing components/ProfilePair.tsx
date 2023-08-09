'use client';

import React, { useEffect, useState } from 'react';
import { useAppSelector } from '@/redux/Store';
import { useGetAllUsers } from '@/Utils/useGetAllUsers';
import Image from 'next/image';
import pairRequest from '@/app/components/pairing components/PairRequest';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';

type ProfilePairProps = {};

type UsersArray = [];

type Request = {
  message: string;
  title: string;
  receiver?: string;
};

const ProfilePair: React.FC<ProfilePairProps> = () => {
  const [user] = useAuthState(auth);
  const [usersRetrieved, setUsersRetrieved] = useState(false);
  const [users, setUsers] = useState<UsersArray>([]);
  const kata = useAppSelector((state) => state.currentKataReducer.value.kata);
  const usersData = useGetAllUsers(setUsersRetrieved);

  const handlePairUp = (receiver = '') => {
    const requestDetails: Request = {
      message: '',
      title: kata.title,
      receiver,
    };
    pairRequest(requestDetails, user);
  };

  useEffect(() => {
    setUsers(usersData);
  }, [usersRetrieved]);

  if (!usersRetrieved) {
    <p>Loading users...</p>;
  } else {
    return (
      <div className='grid-cols-[max-content_min-minmax(0, 1fr)] grid auto-rows-auto rounded-b-lg border border-grey-700 bg-grey-700 py-4 px-7'>
        <h2 className='text-3xl'>Take your pick</h2>
        <button onClick={() => handlePairUp()} className='rounded border px-2'>
          Post to @everyone
        </button>
        <ul className='col-span-2 pt-3'>
          {users?.map((user) => {
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
                <button onClick={() => handlePairUp(user.displayName)} className='rounded border px-2 py-1'>
                  Pair up!
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default ProfilePair;
