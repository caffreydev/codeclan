'use client';

import { auth } from '@/firebase/firebase';
import Link from 'next/link';
import React, { useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import UserObj from './UserObj';

type ProfileDdProps = {};

const ProfileDd: React.FC<ProfileDdProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [signOut, loading, error] = useSignOut(auth);
  const [user] = useAuthState(auth);

  const handleToggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className='relative flex items-center'>
      {/* <!-- Dropdown trigger / Avatar --> */}
      <button
        onClick={handleToggleMenu}
        type='button'
        className='mr-3 flex rounded-full bg-grey-300 text-sm hover:opacity-80 focus:ring-2 focus:ring-primary md:mr-0'
        id='user-menu-button'>
        <span className='sr-only'>Open user menu</span>
        <UserObj userDetail='profileImgNavbar' />
      </button>

      {/* <!-- Dropdown content --> */}
      <div
        onClick={handleToggleMenu}
        onMouseLeave={() => setIsOpen(false)}
        className={`${isOpen ? 'top-0 opacity-100' : 'pointer-events-none -top-4 opacity-0'} absolute right-0 z-50 pt-10 transition-all`}>
        <div className='list-none divide-y divide-grey-500 rounded-lg border border-grey-600 bg-grey-700 text-base shadow-xl' id='user-dropdown'>
          <div className='px-4 py-3'>
            <span className='block text-sm text-primary'>{user?.displayName}</span>
            <span className='block truncate text-sm text-grey-200'>{user?.email}</span>
          </div>
          <ul className='py-2'>
            <li>
              <Link href='/profile' className='block px-4 py-2 text-sm transition hover:bg-grey-600 hover:text-primary'>
                Profile
              </Link>
            </li>
            <li>
              <Link href='/dashboard' className='block px-4 py-2 text-sm transition hover:bg-grey-600 hover:text-primary'>
                Dashboard
              </Link>
            </li>
            <li>
              <Link href='/editProfile' className='block px-4 py-2 text-sm transition hover:bg-grey-600 hover:text-primary'>
                Manage Profile
              </Link>
            </li>
            <li>
              <Link href='/authentication' onClick={() => signOut()} className='block px-4 py-2 text-sm transition hover:bg-grey-600 hover:text-primary'>
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ProfileDd;
