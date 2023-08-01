'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MouseEventHandler, useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-grey-400">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-grey-100 hover:text-primary p-4">CodeClan</span>
        </Link>
        <div className="flex items-center md:order-2 relative mr-4">

          {/* <!-- Dropdown trigger / Avatar --> */}
          <button onClick={handleToggleMenu} type="button" className="flex mr-3 text-sm bg-grey-300 rounded-full md:mr-0 focus:ring-2 focus:ring-primary hover:opacity-80" id="user-menu-button">
            <span className="sr-only">Open user menu</span>
            <Image className="rounded-full" src="/profile-avatar.png" width={35} height={35} alt="user photo"/>
          </button>

          {/* <!-- Dropdown content --> */}
          <div onClick={handleToggleMenu} onMouseLeave={()=>setIsOpen(false)} className={`${isOpen ? "opacity-100 top-0" : "opacity-0 -top-4 pointer-events-none"} transition-all z-50 pt-10 right-0 absolute`}>
            <div className={`text-base list-none divide-y divide-grey-400 rounded-lg shadow-xl bg-grey-300`} id="user-dropdown">
              <div className="px-4 py-3">
                <span className="block text-sm text-primary">jessie</span>
                <span className="block text-sm text-grey-200 truncate">jessie@codeclan.com</span>
              </div>
              <ul className="py-2">
                <li>
                  <Link href="#" className="block px-4 py-2 text-sm hover:text-primary hover:bg-grey-400 transition">Profile</Link>
                </li>
                <li>
                  <Link href="#" className="block px-4 py-2 text-sm hover:text-primary hover:bg-grey-400 transition">Dashboard</Link>
                </li>
                <li>
                  <Link href="#" className="block px-4 py-2 text-sm hover:text-primary hover:bg-grey-400 transition">Settings</Link>
                </li>
                <li>
                  <Link href="#" className="block px-4 py-2 text-sm hover:text-primary hover:bg-grey-400 transition">Sign out</Link>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
        <div className="items-center justify-between flex" id="navbar-user">
          <ul className="flex font-medium p-4 rounded-lg space-x-8">
            <li>
              <Link href={'/'} className='hover:text-primary border-b-2 border-b-transparent hover:border-b-primary py-5 transition'>Home</Link>
            </li>
            <li>
              <Link href={'/katas'} className='hover:text-primary border-b-2 border-b-transparent hover:border-b-primary py-5 transition'>Katas</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}