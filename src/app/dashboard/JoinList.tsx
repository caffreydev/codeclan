import React from 'react';
import Button from '../components/Button';
import { requestPairRequests } from '@/Utils/requestPairRequests';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import lfp from '@/sample-data/LfP';
type JoinListProps = {};
import { Request } from '@/types/firestoreTypes';

const JoinList: React.FC<JoinListProps> = () => {
  const [loadState, setLoadState] = useState(false);
  const requests: Request[] = requestPairRequests(setLoadState);

  return (
    <ul className='my-5'>
      {requests.map((request, i) => {
        return (
          <li key={i} className={`${i % 2 !== 1 ? 'bg-grey-400' : ''} box-border flex items-center p-3`}>
            <p className='inline flex-grow '>
              <span className='cursor-pointer transition ease-in-out hover:text-teal-600 '>
                <Image className='mr-3 inline' src='/profile-avatar.png' alt='profile avatar' width={35} height={35} />
                {request.sender}
              </span>{' '}
              wants to do <span className='inline-block cursor-pointer  transition ease-in-out hover:text-teal-600 '>{request.title} </span> with you
            </p>
            <Button style='bg-primary border-0'>Send request</Button>
          </li>
        );
      })}
    </ul>
  );
};
export default JoinList;
