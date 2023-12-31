'use client';

import Link from 'next/link';
import ProfileDd from './ProfileDd';
import SignIn from './SignIn';
import { auth } from '@/firebase/firebase';
import { PiSignOutBold } from 'react-icons/pi';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useEffect } from 'react';

export default function Header() {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const segment = useSelectedLayoutSegment();

  const bodyClasses = () => {
    const padding = segment == 'playground' ? '6rem' : '3.5rem';
    document.body.style.paddingTop = padding;
  };

  useEffect(() => bodyClasses(), [segment]);

  return (
    <nav className='Header bg-blur fixed inset-x-0 top-0 z-50 border-b border-grey-600 bg-grey-800 bg-opacity-60'>
      <div className='flex flex-wrap items-center justify-between'>
        <Link href='/' className='flex items-center'>
          <span className='self-center whitespace-nowrap bg-gradient-to-r from-purple-400 to-primary bg-clip-text px-4 py-3 text-2xl text-grey-100 text-transparent hover:opacity-60'>
            {`<`}
            <b>CodeClan</b>
            {`/>`}
          </span>
        </Link>
        <div className='flex items-center justify-between' id='navbar-user'>
          {user && (
            <ul className='hidden space-x-2 rounded-lg p-4 font-medium sm:flex md:space-x-8'>
              <li>
                <Link href={'/dashboard'} data-active={segment == 'dashboard'} className='Header-Link'>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href={'/katas'} data-active={segment == 'katas'} className='Header-Link'>
                  Katas
                </Link>
              </li>
              <li>
                <Link href={'/users'} data-active={segment == 'users'} className='Header-Link'>
                  Users
                </Link>
              </li>
              <li>
                <Link href={'/message'} data-active={segment == 'message'} className='Header-Link'>
                  Messages
                </Link>
              </li>
              <li>
                <Link href={'/profile'} data-active={segment == 'profile'} className='Header-Link'>
                  Profile
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div className='mr-4 flex items-center gap-4'>
          {user ? (
            <>
              <ProfileDd />
              <Link href={'/'} className='text-2xl transition hover:text-primary' onClick={() => signOut()}>
                <PiSignOutBold />
              </Link>
            </>
          ) : (
            <SignIn />
          )}
        </div>
      </div>
    </nav>
  );
}
