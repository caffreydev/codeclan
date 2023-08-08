'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Wrapper from '../components/Wrapper';
import UserListKatas from '../components/UserListKatas';
import { TbProgress } from 'react-icons/tb';
import { CgCheckO } from 'react-icons/cg';
import UserObj from '../components/UserObj';
import { useGetUser } from '@/Utils/useGetUser';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { User } from 'firebase/auth';
import { useSearchParams } from 'next/navigation';

type pageProps = {};

export default function page() {
  const userId = useSearchParams().get('user_id'); //view another user profile
  const [user] = useAuthState(auth);
  const [userRetrieved, setUserRetrieved] = useState(false);
  const userData = useGetUser(userId || (user?.uid as string), setUserRetrieved);

  if (!userRetrieved) {
    return <p>loading....</p>;
  }

  return (
    <div className='mx-auto max-w-screen-xl'>
      <Wrapper>
        <h2 className='my-7 text-3xl font-bold'>Profile</h2>
        <div className='mt-6 grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-4'>
          <div className='flex h-auto items-center justify-center rounded-lg border border-b-0 border-grey-600 bg-grey-800 p-4'>
            <UserObj user={userData} userKey='profileImg' />
          </div>
          <div className='h-auto rounded-lg border border-b-0 border-grey-600 bg-grey-800 p-4 lg:col-span-2'>
            <UserObj user={userData} userKey='displayName' />
            <div className='flex items-center justify-between'>
              <div>
                <UserObj user={userData} userKey='github' />
                <p className='text-sm text-grey-200'>
                  {' '}
                  <UserObj user={userData} userKey='joinTime' />
                </p>
              </div>
              <div className='mb-4 mt-6 flex flex-wrap justify-center gap-4'>
                <Link href='/editProfile' className='rounded bg-primary px-3 py-2 text-grey-100 transition hover:bg-grey-200'>
                  Edit
                </Link>
                <Link href='/inbox' className='rounded bg-primary px-3 py-2 text-grey-100 transition hover:bg-grey-200'>
                  Inbox
                </Link>
                <Link href='/sendRequest' className='rounded bg-primary px-3 py-2 text-grey-100 transition hover:bg-grey-200'>
                  Pair up!
                </Link>
              </div>
            </div>
            <hr className='border-grey-600' />
            <p className='mb-2 mt-4 text-xl font-bold'>Bio</p>
            <UserObj user={userData} userKey='bio' />
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <section className='mt-3 grid grid-cols-1 gap-6 rounded-lg border border-b-0 border-grey-600 bg-grey-800 p-4 md:grid-cols-2'>
          <div className='rounded-lg border border-grey-600 bg-grey-700 p-4'>
            <div className='flex items-center'>
              <CgCheckO className='mr-1 text-xl' />
              <h3 className='p-2 text-xl text-primary '>Completed Katas</h3>
            </div>
            <UserListKatas />
          </div>
          <div className='rounded-lg border border-grey-600 bg-grey-700 p-4'>
            <div className='flex items-center'>
              <TbProgress className='mr-1 text-xl' />
              <h3 className='p-2 text-xl text-primary'> Katas in progress</h3>
            </div>
            <UserListKatas />
          </div>
        </section>
      </Wrapper>
    </div>
  );
}

// export default page;
