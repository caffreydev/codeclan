import React from 'react';
import { Message } from '.';
import { dateFromFirebaseTimestamp } from '@/Utils/dateFromFirebaseTimestamp';

type ChatViewItemProps = {
  message: Message;
  userId: string;
};

const ChatViewItem: React.FC<ChatViewItemProps> = ({ message, userId }) => {
  const selfMessage = message.fromId === userId;

  return (
    <div className={`mb-3 rounded-lg border p-3  ${selfMessage ? 'border-primary ' : 'border-indigo-400'}`}>
      <h3 className={`text-sm  ${selfMessage ? 'text-primary ' : 'text-indigo-400'}`}>{message.subject}</h3>
      <p className={`my-1 text-xs italic ${selfMessage ? 'text-lime-300' : 'text-orange-300'}`}>
        {selfMessage ? 'Sent' : 'Received'} at{' '}
        <span className='ml-1 rounded bg-white bg-opacity-10 px-1 py-0.5 text-grey-300'>{dateFromFirebaseTimestamp(message.timeStamp)}</span>
      </p>
      <p className='text-sm tracking-wide'>{message.body}</p>
    </div>
  );
};
export default ChatViewItem;
