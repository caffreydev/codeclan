import React from 'react';
import Link from 'next/link';
import Wrapper from '../components/Wrapper';

type PagesProps = {};

const Pages: React.FC<PagesProps> = () => {
  return (
    <div className='mx-auto max-w-screen-xl'>
      <Wrapper>
        <h2 className='my-7 text-3xl font-bold'>Inbox</h2>
        <Link href={{ pathname: '/message', query: { username: 'DamianzCoolAgain' } }} className='mb-3 box-border flex items-center border p-3'>
          <p>Message from DamianzCoolAgain</p>
        </Link>
        <Link href={{ pathname: '/message', query: { username: 'KCnotGreat' } }} className='mb-3 box-border flex items-center border p-3'>
          <p>Message from KCnotGreat</p>
        </Link>
        <Link href={{ pathname: '/message', query: { username: "Jessica's Jeliquent Jivas" } }} className='mb-3 box-border flex items-center border p-3'>
          <p>Message from Jessica's Jeliquent Jivas</p>
        </Link>
      </Wrapper>
    </div>
  );
};

export default Pages;
