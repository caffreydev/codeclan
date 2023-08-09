import Image from 'next/image';
import React from 'react';
import { User } from '@/types/firestoreTypes';
import Link from 'next/link';
import { dateFromFirebaseTimestamp } from '@/Utils/dateFromFirebaseTimestamp';
import { DiGithubBadge } from 'react-icons/di';

type UsersListItemProps = {
  user: User;
};

const UsersListItem: React.FC<UsersListItemProps> = ({ user }) => {
  return (
    <li>
      <Link
        href={`/profile?user_id=${user?.userId}`}
        className='flex h-full flex-col items-center gap-10 rounded-lg bg-grey-700 p-6 text-center text-grey-200 transition hover:bg-grey-600 sm:px-12'>
        <Image className='h-32 w-32 rounded-full bg-grey-600' width={100} height={100} alt='user profile' src={user?.photoURL}></Image>
        <div className='divide-y divide-grey-400'>
          <h2 className='text-center text-xl font-semibold sm:text-2xl'>{user?.displayName}</h2>
          <p className='px-5 text-xs text-grey-300 sm:text-base'>
            Member Since: <span className='tex-grey-200'>{dateFromFirebaseTimestamp(user?.joinTime).slice(6, 10)}</span>
            <span className='flex items-center justify-center gap-1 text-grey-150'>
              <DiGithubBadge className='text-xl' />
              {user?.Github}
            </span>
          </p>
        </div>
      </Link>
    </li>
  );
};
export default UsersListItem;
