import Link from 'next/link';
import React from 'react';
import Wrapper from '../components/Wrapper';
import UserListKatas from '../components/UserListKatas';
import { TbProgress } from 'react-icons/tb';
import { CgCheckO } from 'react-icons/cg';
import UserObj from '../components/UserObj';

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <div className='mx-auto max-w-screen-xl'>
      <Wrapper>
        <h2 className='my-7 text-3xl font-bold'>Profile</h2>
        <div className='mt-6 grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-4'>
          <div className='flex h-auto items-center justify-center rounded-lg bg-grey-300 p-4'>
            <UserObj userDetail='profileImg' />
          </div>
          <div className='h-auto rounded-lg bg-grey-300 p-4 lg:col-span-2'>
            <UserObj userDetail='displayName' />
            <div className='flex items-center justify-between'>
              <div>
                <UserObj userDetail='email' />
                <p className='text-sm text-grey-200'>
                  <span className='text-grey-100'>Member Since: </span> 01-08-2023
                </p>
              </div>
              <div className='mb-4 mt-6 flex flex-wrap justify-center gap-4'>
                <Link href='/editProfile' className='rounded bg-primary px-3 py-2 text-grey-100 transition hover:bg-grey-200'>
                  Edit
                </Link>
                <Link href='/inbox' className='rounded bg-primary px-3 py-2 text-grey-100 transition hover:bg-grey-200'>
                  Inbox
                </Link>
                <Link href='#' className='rounded bg-primary px-3 py-2 text-grey-100 transition hover:bg-grey-200'>
                  Pair up!
                </Link>
              </div>
            </div>
            <hr className='border-grey-200' />
            <p className='mb-2 mt-4 text-xl font-bold'>Bio</p>
            <p className='text-grey-100'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere
              risus non velit egestas suscipit.
            </p>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <section className='mt-3 grid grid-cols-1 rounded-lg bg-grey-300 lg:grid-cols-2'>
          <div className='rounded-lg bg-grey-300 p-4'>
            <div className='flex items-center'>
              <CgCheckO className='mr-1 text-xl' />
              <h3 className='p-2 text-xl text-primary '>Completed Katas</h3>
            </div>
            <UserListKatas />
          </div>
          <div className='rounded-lg bg-grey-300 p-4 '>
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
};
export default page;
