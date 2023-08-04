'use client';

import React from 'react';
import { useAppSelector } from '@/redux/Store';
import { IoClose } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/Store';
import { closeAuth, openAuth, changePage } from '@/redux/features/auth-slice';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import CreateAccount from './CreateAccount';

type AuthenticationModalProps = {};

const AuthenticationModal: React.FC<AuthenticationModalProps> = () => {
	const dispatch = useDispatch<AppDispatch>();

	const page = useAppSelector((state) => state.authModalStateReducer.value.page);

	const isOpen = useAppSelector((state) => state.authModalStateReducer.value.isOpen);

	return (
		isOpen && (<>
			<div className='Modal'>
				<header className='relative rounded-t-lg bg-grey-400'>
					<div className='flex p-4 pb-0'>
						<button
							onClick={() => {
								dispatch(changePage('login'));
							}}
							className={`border-b-2 p-2 px-4 border-transparent rounded-t-md ${page === 'login' ? 'bg-grey-300' : 'hover:border-b-primary'}`}>
							Login
						</button>
						<button
							onClick={() => {
								dispatch(changePage('createAccount'));
							}}
							className={`border-b-2 p-2 px-4 border-transparent rounded-t-md ${page === 'createAccount' ? 'bg-grey-300' : 'hover:border-b-primary'}`}>
							Sign Up
						</button>
					</div>
					<button className='absolute inset-y-0 right-0 p-5 text-xl hover:scale-125 transition' onClick={() => dispatch(closeAuth())}>
						<IoClose />
					</button>
				</header>
				<div className='rounded-b-lg bg-grey-300'>
					{page === 'forgotPassword' ? <ForgotPassword /> : page === 'createAccount' ? <CreateAccount /> : <Login />}
				</div>
			</div>
			<div className="Modal-overlay" onClick={() => dispatch(closeAuth())}></div>
		</>
		)
	);
};

export default AuthenticationModal;
