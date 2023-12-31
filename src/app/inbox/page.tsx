import React from 'react';

import MessageList from '../components/MessageList';

type PagesProps = {};

const Pages: React.FC<PagesProps> = () => {
  return <MessageList boxType='Inbox' />;
};

export default Pages;
