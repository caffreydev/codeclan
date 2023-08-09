'use client';

import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { Message } from '.';
import MessageListItem from './MessageListItem';
import { useGetMessages } from '@/Utils/useGetMessages';

type MessageListProps = {
  boxType: 'Inbox' | 'Outbox' | 'Chat View';
};

const MessageList: React.FC<MessageListProps> = ({ boxType }) => {
  const [user, loading] = useAuthState(auth);
  const [messagesRetrieved, setMessagesRetrieved] = useState(false);

  const messagesArray: Message[] = useGetMessages(user?.uid as string, boxType, setMessagesRetrieved);

  if (!messagesRetrieved) {
    return (
      <div className='border-1px mx-auto w-5/6 max-w-screen-xl px-2 py-10'>
        <h2 className='mb-6 text-4xl font-bold'>{boxType}</h2>
        <p>Loading Messages</p>
      </div>
    );
  }

  return (
    <div className='border-1px mx-auto w-5/6 max-w-screen-xl px-2 py-10'>
      <h2 className='mb-6 text-4xl font-bold'>{boxType}</h2>
      <hr className='border' />
      {messagesArray.length === 0 ? (
        <h1>Wow, so much empty!...</h1>
      ) : (
        messagesArray.map((message) => <MessageListItem messageType={boxType === 'Inbox' ? 'from' : 'to'} message={message} />)
      )}
    </div>
  );
};
export default MessageList;
