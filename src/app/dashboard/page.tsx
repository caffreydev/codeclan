import React, { useState } from 'react';
import kataRequests from '@/sample-data/requests'; 
import Button from '../function/button';
import group from '../function/groupByKata';
import RequestList from './RequestList';
import JoinList from './JoinList';


type pageProps = {};

const page:React.FC<pageProps> = () => {

  return (
    <div className='max-w-screen-xl w-5/6 border-1px mx-auto py-10 px-2'>
      <h2 className='text-4xl font-bold mb-6'>Dashboard</h2>
      <Button style="bg-primary border-0">Inbox</Button>
      <h3 className='text-3xl font-bold mb-3 my-1'>Requests</h3>
      <hr className='border' />
    <RequestList />
      <h3 className='text-3xl font-bold mb-3 mt-6'>Looking for pairs</h3>
      <hr className='border' />
    <JoinList />
    </div>
  )
}
export default page;