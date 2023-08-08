'use client';

import { auth } from '@/firebase/firebase';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Image from 'next/image';

type UserObjProps = {
  userDetail: 'displayName' | 'email' | 'profileImg' | 'profileImgNavbar';
};

const UserObj: React.FC<UserObjProps> = ({ userDetail }) => {
  const [user, loading, error] = useAuthState(auth);

  switch (userDetail) {
    case 'displayName':
      return <h3 className='text-xl font-bold text-primary'>{user?.displayName} 👩🏻‍💻</h3>;
    case 'email':
      return (
        <p className='text-grey-200'>
          <span className='text-grey-100'>email: </span>
          {user?.email}
        </p>
      );
    case 'profileImg':
      return (
        <Image
          alt='profile avatar'
          src={user?.photoURL ? user.photoURL : '/profile-avatar.png'}
          width={300}
          height={300}
          className='h-40 w-40 shrink-0 self-center rounded-full bg-gray-300 md:h-52 md:w-52'></Image>
      );
    case 'profileImgNavbar':
      return (
        <Image
          alt='profile avatar'
          src={user?.photoURL ? user.photoURL : '/profile-avatar.png'}
          width={35}
          height={35}
          className='h-8 w-8 shrink-0 self-center rounded-full bg-gray-300'></Image>
      );
    default:
      return;
  }
};
export default UserObj;
