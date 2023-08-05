import React from 'react';
import Link from 'next/link';

type PagesProps = {};

const Pages: React.FC<PagesProps> = () => {
  return (
    <div className='border-1px mx-auto w-5/6 max-w-screen-xl px-2 py-10'>
      <h2 className='mb-6 text-4xl font-bold'>Inbox</h2>
      <hr className='border' />
      <Link href={{ pathname: '/message', query: { username: 'DamianzCoolAgain' } }} className='mb-3 box-border flex items-center border p-3'>
        <p>Message from DamianzCoolAgain</p>
      </Link>
      <Link href={{ pathname: '/message', query: { username: 'KCnotGreat' } }} className='mb-3 box-border flex items-center border p-3'>
        <p>Message from KCnotGreat</p>
      </Link>
      <Link href={{ pathname: '/message', query: { username: "Jessica's Jeliquent Jivas" } }} className='mb-3 box-border flex items-center border p-3'>
        <p>Message from Jessica's Jeliquent Jivas</p>
      </Link>
    </div>
  );
};

export default Pages;
