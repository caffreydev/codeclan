'use client';

import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { Message } from '.';
import MessageListItem from './MessageListItem';
import { useGetMessages } from '@/Utils/useGetMessages';
import { Loader } from './Loader';

export type boxType = 'Inbox' | 'Outbox' | 'Chat View';

type MessageListProps = {
  boxType: boxType;
};

const MessageList: React.FC<MessageListProps> = ({ boxType }) => {
  const [user, loading] = useAuthState(auth);
  const [messagesRetrieved, setMessagesRetrieved] = useState(false);

  const messagesArray: Message[] = useGetMessages(user?.uid as string, boxType, setMessagesRetrieved);

  if (!messagesRetrieved) {
    return (
      <div className='flex flex-col gap-3 rounded-b-lg border border-t-0 border-grey-600 bg-grey-800 p-5'>
        <Loader />
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-3 rounded-b-lg border border-t-0 border-grey-600 bg-grey-800 p-5'>
      {messagesArray.length === 0 ? (
        <h1>Wow, so much empty!...</h1>
      ) : (
        messagesArray.map((message) => <MessageListItem key={message.id} messageType={boxType === 'Inbox' ? 'from' : 'to'} message={message} />)
      )}
    </div>
  );
};
export default MessageList;
