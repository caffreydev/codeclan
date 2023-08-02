'use client'

import { auth } from '@/firebase/firebase';
import Link from 'next/link';
import React, { useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import UserObj from './UserObj';

type ProfileDdProps = {
    
}

const ProfileDd:React.FC<ProfileDdProps> = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [signOut, loading, error] = useSignOut(auth)
    const [user] = useAuthState(auth)

    const handleToggleMenu = () => setIsOpen(!isOpen)
    return (<div className="flex items-center relative mr-4">

    {/* <!-- Dropdown trigger / Avatar --> */}
    <button onClick={handleToggleMenu} type="button" className="flex mr-3 text-sm bg-grey-300 rounded-full md:mr-0 focus:ring-2 focus:ring-primary hover:opacity-80" id="user-menu-button">
      <span className="sr-only">Open user menu</span>
      <UserObj userDetail="profileImgNavbar"/>
    </button>
    
    {/* <!-- Dropdown content --> */}
    <div onClick={handleToggleMenu} onMouseLeave={()=>setIsOpen(false)} className={`${isOpen ? "opacity-100 top-0" : "opacity-0 -top-4 pointer-events-none"} transition-all z-50 pt-10 right-0 absolute`}>
      <div className={`text-base list-none divide-y divide-grey-400 rounded-lg shadow-xl bg-grey-300`} id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-primary">{user?.displayName}</span>
          <span className="block text-sm text-grey-200 truncate">{user?.email}</span>
        </div>
        <ul className="py-2">
          <li>
            <Link href="/profile" className="block px-4 py-2 text-sm hover:text-primary hover:bg-grey-400 transition">Profile</Link>
          </li>
          <li>
            <Link href="/dashboard" className="block px-4 py-2 text-sm hover:text-primary hover:bg-grey-400 transition">Dashboard</Link>
          </li>
          <li>
            <Link href="#" className="block px-4 py-2 text-sm hover:text-primary hover:bg-grey-400 transition">Manage Profile</Link>
          </li>
          <li>
            <Link href="/authentication" onClick={() => signOut()
          } className="block px-4 py-2 text-sm hover:text-primary hover:bg-grey-400 transition">Sign out</Link>
          </li>
        </ul>
      </div>
    </div>
    
  </div>)
}
export default ProfileDd;