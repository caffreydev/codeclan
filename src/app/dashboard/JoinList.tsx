import React from 'react';
import Button from '../function/button';
import lfp from '@/sample-data/LfP';
import Image from 'next/image';

type JoinListProps = {
    
};

const JoinList:React.FC<JoinListProps> = () => {
    
    return <ul className='my-5'>
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
   
}
export default JoinList;