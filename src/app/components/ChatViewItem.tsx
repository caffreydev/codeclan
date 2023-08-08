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
    <div className={`mb-3 box-border rounded-2xl border p-3  ${selfMessage ? 'bg-white text-black' : 'bg-blue-500'}`}>
      <h3 className='text-2xl'>{message.subject}</h3>
      <p className={`text-sm italic ${selfMessage ? 'text-gray-500' : 'text-gray-300'}`}>
        {selfMessage ? 'Sent' : 'Received'} at {dateFromFirebaseTimestamp(message.timeStamp)}
      </p>
      <br />
      <p>{message.body}</p>
    </div>
  );
};
export default ChatViewItem;
