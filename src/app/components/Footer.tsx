import React from 'react';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className='w-full bg-black py-16 text-center text-grey-600'>
      <b className=' text-grey-300'>
        {`<`}
        <b>CodeClan</b>
        {`/>`}
      </b>{' '}
      <span className='px-2'>|</span>
      <span>{new Date().getFullYear()} ©</span>
    </footer>
  );
};
export default Footer;
