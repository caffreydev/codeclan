'use client';

import Link from 'next/link';
import ProfileDd from './ProfileDd';
import SignIn from './SignIn';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';

export default function Header() {
	const [user, loading, error] = useAuthState(auth);

	return (
		<nav className='fixed inset-x-0 top-0 z-50 bg-grey-400'>
			{user && (
				<div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between'>
					<Link href='/' className='flex items-center'>
						<span className='self-center whitespace-nowrap p-4 text-2xl font-semibold text-grey-100 hover:text-primary'>CodeClan</span>
					</Link>
					<div className='flex items-center justify-between' id='navbar-user'>
						<ul className='flex space-x-8 rounded-lg p-4 font-medium'>
							<li>
								<Link href={'/'} className='border-b-2 border-b-transparent py-5 transition hover:border-b-primary hover:text-primary'>
									Home
								</Link>
							</li>
							<li>
								<Link href={'/katas'} className='border-b-2 border-b-transparent py-5 transition hover:border-b-primary hover:text-primary'>
									Katas
								</Link>
							</li>
							<li>
								<Link href={'/profile'} className='border-b-2 border-b-transparent py-5 transition hover:border-b-primary hover:text-primary'>
									Profile
								</Link>
							</li>
						</ul>
					</div>
					{user ? <ProfileDd /> : <SignIn />}
				</div>
			)}
		</nav>
	);
}
