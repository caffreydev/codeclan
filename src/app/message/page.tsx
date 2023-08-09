import React from 'react';
import Wrapper from '../components/Wrapper';

const Message: React.FC = () => {
  return (
    <Wrapper>
      <div className='border-1px mx-auto w-5/6 max-w-screen-xl px-2 py-10'>
        <h2 className='mb-6 text-4xl font-bold'>Message</h2>
        <hr className='border border-grey-600' />
        <p>Username:</p>I am the message - any nudes?
      </div>
    </Wrapper>
  );
};

export default Message;
