import React from 'react';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className='w-full bg-black py-16 text-center'>
      <p className='text-grey-500'>
        <b className='text-grey-300'>CodeClan</b> - 2023 ©
      </p>
    </footer>
  );
};
export default Footer;
