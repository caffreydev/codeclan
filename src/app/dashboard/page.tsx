import React, { useState } from 'react';
import kataRequests from '@/sample-data/requests'; 
import lfp from '@/sample-data/LfP';
import Image from 'next/image';
import Button from '../function/button';
import group from '../function/groupByKata';


type pageProps = {};

const page:React.FC<pageProps> = () => {
  // const [gbk, setGbk] = useState(group(kataRequests))
  const groupedByKata = group(kataRequests)

  return (
    <div className='max-w-screen-xl w-5/6 border-1px mx-auto py-10 px-2'>
      <h2 className='text-4xl font-bold mb-6'>Dashboard</h2>
      <h3 className='text-3xl font-bold mb-3 my-1'>Requests</h3>
      <hr className='border' />
      <ul className='my-5 grid grid-cols-2 gap-5 auto-rows-auto'>
        {/* {groupedByKata.map((request, i) => {
          return <li key={request.title} className={`${i % 2 !== 1 ? 'bg-grey-400' : ''} flex p-3 box-border items-center`}>
            <Button style={`${i % 2 !== 1 ? 'bg-grey-400' : ''} mx-3 border-0`}>
              Accept
            </Button>
            <Button>
              Decline
            </Button>
          </li>
        })} */}
        {Object.entries(groupedByKata).map(pair => {
          return <li className='col-span-1 p-3 bg-grey-400 border-0 rounded-2xl'>
            <h4 className='text-xl'>{pair[0]}</h4>
            <ul>
              {pair[1].map(requestObj => {
                return <li className='flex items-center'>
                  <p className='flex-grow'>{requestObj.sender}</p>
                  <button className="border-0 rounded-lg p-1 w-9 mx-3 bg-accept">✔</button>
                  <button className="border-0 rounded-lg p-1 w-9 bg-decline">✘</button>
                </li>
              })}
            </ul>
          </li>
        })}
      </ul>
      <h3 className='text-3xl font-bold mb-3 mt-6'>Looking for pairs</h3>
      <hr className='border' />
      <ul className='my-5'>
        {lfp.map((request, i) => {
          return <li key={request.reqId} className={`${i % 2 !== 1 ? 'bg-grey-400' : ''} flex p-3 box-border items-center`}>
            <p className='inline flex-grow '>
              <span className='cursor-pointer hover:text-teal-600 transition ease-in-out '>
              <Image className='inline mr-3' src='/profile-avatar.png' alt='profile avatar' width={35} height={35}/>
              {request.sender}</span> wants to do {" "}
              <span className='inline-block cursor-pointer  hover:text-teal-600 transition ease-in-out '>{request.title} </span> 
              {" "} with you
            </p>
            <Button style="bg-primary border-0" >
              Join in
            </Button>
          </li>
        })}
      </ul>
    </div>
  )
}
export default page;