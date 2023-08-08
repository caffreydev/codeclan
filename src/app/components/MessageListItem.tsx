import Link from 'next/link';
import React from 'react';
import { Message } from '.';

type MessageListItemProps = {
  message: Message;
  messageType: 'from' | 'to';
};

const MessageListItem: React.FC<MessageListItemProps> = ({ message, messageType }) => {
  return (
    <Link
      href={{ pathname: '/chatview', query: { friendId: messageType === 'from' ? message.fromId : message.toId } }}
      className='mb-3 box-border flex items-center border p-3'>
      <p>
        Message {messageType} {messageType === 'from' ? message.fromDisplay : message.toDisplay}. Subject: {message.subject}
      </p>
    </Link>
  );
};
export default MessageListItem;
