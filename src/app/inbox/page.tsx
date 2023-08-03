import React from 'react';
import Link from 'next/link';

type PagesProps = {};

const Pages: React.FC<PagesProps> = () => {
  return (
    <div className='max-w-screen-xl w-5/6 border-1px mx-auto py-10 px-2'>
      <h2 className='text-4xl font-bold mb-6'>Inbox</h2>
      <hr className='border' />
      <Link href={{ pathname: '/message', query: { username: 'DamianzCoolAgain' } }} className='flex box-border items-center border p-3 mb-3'>
        <p>Message from DamianzCoolAgain</p>
      </Link>
      <Link href={{ pathname: '/message', query: { username: 'KCnotGreat' } }} className='flex box-border items-center border p-3 mb-3'>
        <p>Message from KCnotGreat</p>
      </Link>
      <Link href={{ pathname: '/message', query: { username: "Jessica's Jeliquent Jivas" } }} className='flex box-border items-center border p-3 mb-3'>
       <p>Message from Jessica's Jeliquent Jivas</p>
      </Link>
    </div>
  );
};

export default Pages;