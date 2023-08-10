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
      className='relative w-full rounded-lg border border-grey-600 bg-grey-700 p-4 text-grey-100 transition hover:border-primary'>
      <p>
        Message {messageType} {messageType === 'from' ? message.fromDisplay : message.toDisplay}. Subject: {message.subject}
      </p>
    </Link>
  );
};
export default MessageListItem;
