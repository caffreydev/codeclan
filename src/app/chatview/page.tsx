'use client';

import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { Message } from '.';
import { useGetMessages } from '@/Utils/useGetMessages';
import { useSearchParams } from 'next/navigation';
import ChatViewItem from '../components/ChatViewItem';

type pageProps = {};

const page: React.FC<pageProps> = () => {
  const friendId = useSearchParams().get('friendID') as 'string';

  const [user, loading] = useAuthState(auth);
  const [messagesRetrieved, setMessagesRetrieved] = useState(false);

  const messagesArray: Message[] = useGetMessages(user?.uid as string, 'Chat View', setMessagesRetrieved, friendId);

  return (
    <>
      {messagesArray.map((message: Message) => {
        return <ChatViewItem message={message} />;
      })}
    </>
  );
};
export default page;
