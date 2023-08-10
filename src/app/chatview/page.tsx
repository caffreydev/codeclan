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
import Wrapper from '../components/Wrapper';

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
      return toast.error('You must include a subject and message text to send a message!', {
        position: 'top-center',
        autoClose: 5000,
        theme: 'dark',
      });
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
      toast.success('Great! Message sent', {
        position: 'top-right',
        autoClose: 5000,
        theme: 'dark',
      });
      setNewMessageSubject('');
      setNewMessageText('');
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
      <Wrapper className='pb-4 sm:pb-6 md:pb-8'>
        <h2 className='my-7 text-3xl font-bold'>
          Chat with <span className='tracking-widest'>...</span>
        </h2>
        <p>Loading messages...</p>
      </Wrapper>
    );

  return (
    <Wrapper className='pb-4  sm:pb-6 md:pb-8'>
      <h2 className='my-7 text-3xl font-bold '>
        Chat with <span className='text-3xl font-bold text-primary'>{friendUser.displayName}</span>
      </h2>
      <form
        className='mb-4 flex flex-col gap-4 rounded-lg border border-grey-600 bg-grey-800 p-4 sm:mb-6 sm:gap-6 sm:p-6 md:mb-8 md:p-8'
        onSubmit={handleSendMessage}>
        <label>
          <input
            className='w-full rounded-lg  border border-grey-600  bg-grey-600 bg-transparent p-2 py-2.5 pe-10 text-sm text-grey-200 shadow-sm outline-none transition hover:border-grey-500 focus:border-grey-300 sm:text-sm'
            onChange={handleNewMessageSubjectChange}
            type='text'
            name='messageSubject'
            value={newMessageSubject}
            placeholder='Enter your message subject here...'
          />
        </label>
        <label>
          <textarea
            className='w-full rounded-lg  border border-grey-600  bg-grey-600 bg-transparent p-2 py-2.5 pe-10 text-sm text-grey-200 shadow-sm outline-none transition hover:border-grey-500 focus:border-grey-300 sm:text-sm'
            rows={4}
            placeholder='Enter your insightful message here...'
            value={newMessageText}
            onChange={handleMessageTextChange}
          />
        </label>
        <button type='submit' className='rounded-lg bg-primary px-4 py-2  hover:bg-opacity-60'>
          Send message
        </button>
      </form>
      {messagesArray.length === 0 && sentMessages.length === 0 ? <h1>Wow, so much empty!... why not send the first message?</h1> : ''}
      {sentMessages.map((message: Message) => {
        return <ChatViewItem key={message.id} message={message} userId={user?.uid as string} />;
      })}
      {messagesArray.map((message: Message) => {
        return <ChatViewItem key={message.id} message={message} userId={user?.uid as string} />;
      })}
    </Wrapper>
  );
};
export default page;
