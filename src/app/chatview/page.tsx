'use client';

import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from '@/firebase/firebase';
import { Message, User } from '@/types/firestoreTypes';
import { useGetMessages } from '@/Utils/useGetMessages';
import { useGetUser } from '@/Utils/useGetUser';
import { useSearchParams } from 'next/navigation';
import ChatViewItem from '../components/ChatViewItem';
import { Timestamp, doc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

type pageProps = {};

const page: React.FC<pageProps> = () => {
  const friendId = useSearchParams().get('friendId') as 'string';

  const [user, loading] = useAuthState(auth);
  const [messagesRetrieved, setMessagesRetrieved] = useState(false);
  const [friendUserRetrieved, setFriendUserRetrieved] = useState(false);
  const [newMessageText, setNewMessageText] = useState('');
  const [newMessageSubject, setNewMessageSubject] = useState('');
  const [sentMessages, setSentMessages] = useState<Message[]>([]);

  const friendUser: User = useGetUser(friendId, setFriendUserRetrieved) as User;
  const messagesArray: Message[] = useGetMessages(user?.uid as string, 'Chat View', setMessagesRetrieved, friendId);

  //form controllers
  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newMessageSubject || !newMessageText) {
      return toast.error('You must include a subject and message text to send a message!');
    }

    const timeStamp = new Timestamp(Math.floor(new Date().getTime() / 1000), 0);
    const idString = `From ${user?.displayName} to ${friendUser.displayName} at ${timeStamp}`;
    const newMessage: Message = {
      body: newMessageText,
      subject: newMessageSubject,
      fromId: user?.uid as string,
      toId: friendUser.userId,
      fromDisplay: user?.displayName as string,
      toDisplay: friendUser.displayName,
      id: idString,
      timeStamp: timeStamp,
    };
    try {
      const ref = await setDoc(doc(firestore, 'messages', newMessage.id), newMessage);
      setSentMessages((prev) => {
        const updatedArray = [...prev];
        updatedArray.push(newMessage);
        return updatedArray;
      });
      toast.success('Great! Message sent');
    } catch (e: any) {
      alert(e?.message);
    }
  };

  const handleMessageTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessageText(e.target.value);
  };

  const handleNewMessageSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessageSubject(e.target.value);
  };

  if (!messagesRetrieved || !friendUserRetrieved)
    return (
      <div className='border-1px mx-auto w-5/6 max-w-screen-xl px-2 py-10'>
        <h2 className='mb-6 text-4xl font-bold'>Your Chat With</h2>
      </div>
    );

  return (
    <div className='border-1px mx-auto w-5/6 max-w-screen-xl px-2 py-10'>
      <h2 className='mb-10 text-4xl font-bold'>Your Chat With {friendUser.displayName}</h2>
      <form className='mb-5' onSubmit={handleSendMessage}>
        <label htmlFor='messageSubject' />
        <input
          className='mb-2 block w-full rounded-2xl border border-gray-300 bg-gray-100 p-2.5 pb-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          onChange={handleNewMessageSubjectChange}
          type='text'
          name='messageSubject'
          placeholder='Enter your message subject here...'
        />
        <label htmlFor='messageText' />
        <textarea
          className='mb-2 block w-full rounded-2xl border border-gray-300 bg-gray-100 p-2.5 pb-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          rows={4}
          placeholder='Enter your insightful message here...'
          onChange={handleMessageTextChange}
        />
        <button type='submit' className='rounded-lg bg-blue-200 p-3 text-black hover:bg-blue-500 hover:text-white'>
          Send Message
        </button>
      </form>
      {sentMessages.map((message: Message) => {
        return <ChatViewItem message={message} userId={user?.uid as string} />;
      })}
      {messagesArray.map((message: Message) => {
        return <ChatViewItem message={message} userId={user?.uid as string} />;
      })}
    </div>
  );
};
export default page;
