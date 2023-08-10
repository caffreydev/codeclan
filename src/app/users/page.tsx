'use client';
import { useGetUsers } from '@/Utils/useGetUsers';
import React, { useState } from 'react';
import { User } from '@/types/firestoreTypes';
import UsersListItem from '../components/UsersListItem';
import Wrapper from '../components/Wrapper';
import { BiSearch } from 'react-icons/bi';

type pageProps = {};

const page: React.FC<pageProps> = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  let allUsers: User[] = [];

  try {
    allUsers = useGetUsers(setLoading);
  } catch (error) {
    throw new Error('Failed to fetch data');
  }

  const filteredUsers = (): User[] => (search.toLowerCase() !== '' ? allUsers.filter((user) => user.displayName.toLowerCase().includes(search)) : allUsers);

  if (loading) <></>;
  return (
    <Wrapper className='pb-4 sm:pb-6 md:pb-8'>
      <h2 className='my-7 text-3xl font-bold'>Users</h2>
      <div className='rounded-lg border border-grey-600 bg-grey-800 p-4 sm:p-6 md:p-8'>
        <label className='relative flex flex-col pb-4 sm:pb-6 md:pb-8'>
          <span className='mb-1 text-grey-150'>Search for a user</span>
          <div className='relative'>
            <input
              type='text'
              id='Search'
              onChange={(e) => setSearch(e.target.value)}
              placeholder='username'
              className='w-full rounded-lg border border-grey-600 bg-grey-600 bg-transparent p-2 py-2.5 pe-10 text-sm text-grey-200 shadow-sm outline-none transition hover:border-grey-500 focus:border-grey-300 sm:text-sm'
            />
            <button type='button' className='absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-400 hover:text-grey-500'>
              <BiSearch />
            </button>
          </div>
        </label>
        <ul className='grid gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3'>
          {filteredUsers().map((user) => {
            return <UsersListItem key={user.userId} user={user} />;
          })}
        </ul>
        <div>{!filteredUsers().length && <>User not found :\ </>}</div>
      </div>
    </Wrapper>
  );
};

export default page;
