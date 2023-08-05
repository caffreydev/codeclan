import React from 'react';
import Button from '../function/button';
import RequestList from './RequestList';
import JoinList from './SendRequest';
import Link from 'next/link';

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <div className='border-1px mx-auto w-5/6 max-w-screen-xl px-2 py-10'>
      <h2 className='mb-6 text-4xl font-bold'>Dashboard</h2>
      <Link href='/inbox'>
        <Button style='bg-primary border-0'>Inbox</Button>
      </Link>
      <div className='grid grid-cols-2 gap-10'>
        <div>
          <h3 className='my-1 mb-3 text-3xl font-bold'>Requests</h3>
          <hr className='border' />
          <RequestList />
        </div>
        <div>
          <h3 className='mb-3 text-3xl font-bold'>Looking for pairs</h3>
          <hr className='border' />
          <JoinList />
        </div>
      </div>
    </div>
  );
};
export default page;
