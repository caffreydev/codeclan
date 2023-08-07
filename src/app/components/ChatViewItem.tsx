import React from 'react';
import { Message } from '.';

type ChatViewItemProps = {
  message: Message;
};

const ChatViewItem: React.FC<ChatViewItemProps> = ({ message }) => {
  return <div>{message.body}</div>;
};
export default ChatViewItem;
