'use client';

import Image from 'next/image';
import { User } from '@/types/firestoreTypes';
import { User as fireBaseAuthUser } from '@/firebase/firebase';
import { dateFromFirebaseTimestamp } from '@/Utils/dateFromFirebaseTimestamp';

type UserObjProps = {
  user: User | fireBaseAuthUser;
  userDetail: 'displayName' | 'github' | 'profileImg' | 'profileImgNavbar' | 'bio' | 'joinTime';
};

const UserObj: React.FC<UserObjProps> = ({ user, userDetail }) => {
  switch (userDetail) {
    case 'displayName':
      return <h3 className='text-xl font-bold text-primary'>{user?.displayName} 💻</h3>;
    case 'github':
      return (
        <p className='text-grey-200'>
          <span className='text-grey-100'>Github: </span>
          {user?.Github}
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
    case 'bio':
      return <p className='text-grey-100'>{user?.Bio}</p>;
    case 'joinTime':
      return <span className='text-grey-100'>Member Since: {dateFromFirebaseTimestamp(user?.joinTime).slice(0, 10)}</span>;
    default:
      return;
  }
};
export default UserObj;
