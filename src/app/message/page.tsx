'use client';
import React, { useState } from 'react';
import Wrapper from '../components/Wrapper';
import MessageList, { boxType } from '../components/MessageList';

const Message: React.FC = () => {
  const [page, setPage] = useState<boxType>('Inbox');

  const handleClick = (page: boxType) => {
    setPage(page);
  };

  return (
    <Wrapper className='pb-4 sm:pb-6 md:pb-8'>
      <h2 className='my-7 text-3xl font-bold'>Messages </h2>
      <div className='h-full rounded-lg bg-grey-800'>
        <div className='border-b border-grey-600 p-4 pb-0'>
          <nav className='-mb-px flex'>
            <button
              onClick={() => handleClick('Inbox')}
              className={`border bg-grey-800 px-4 py-2 text-base font-medium ${
                page === 'Inbox'
                  ? ` -mb-[1px]  rounded-t-md border-grey-600  border-b-transparent text-primary`
                  : 'border-transparent border-b-grey-600 text-grey-300 hover:text-grey-100'
              }`}>
              Inbox
            </button>

            <button
              onClick={() => handleClick('Outbox')}
              className={` border bg-grey-800 px-4 py-2 text-base font-medium ${
                page === 'Outbox'
                  ? ` -mb-[1px] rounded-t-md border-grey-600  border-b-transparent text-primary`
                  : 'border-transparent border-b-grey-600 text-grey-300 hover:text-grey-100'
              }`}>
              Sent
            </button>
          </nav>
        </div>
        {page && <MessageList boxType={page} />}
      </div>
    </Wrapper>
  );
};

export default Message;
