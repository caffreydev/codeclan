import Link from 'next/link';
import React from 'react';

type SignInProps = {};

const SignIn: React.FC<SignInProps> = () => {
	return (
		<Link href='/authentication'>
			<button type='button' className='mr-3 flex rounded-sm bg-grey-300 px-3 py-2 text-sm hover:opacity-80 focus:ring-2 focus:ring-primary md:mr-0'>
				Sign In
			</button>
		</Link>
	);
};
export default SignIn;
