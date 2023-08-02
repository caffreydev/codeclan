"use client"

import { auth } from '@/firebase/firebase';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Image from 'next/image';

type UserObjProps = {
    userDetail: 'displayName' | 'email' | 'profileImg'
};

const UserObj:React.FC<UserObjProps> = ({userDetail}) => {
    const [user, loading, error] = useAuthState(auth)
    


   switch (userDetail) {
    case 'displayName': 
    return <h3 className="text-xl font-bold text-primary">{user?.displayName} 👩🏻‍💻</h3>
    case 'email':
        return <p className="text-grey-200"><span className='text-grey-100'>email: </span>{user?.email}</p>
    case 'profileImg':
        return <Image alt='profile avatar' src={user?.photoURL ? user.photoURL : '/profile-avatar.png'} width={300} height={300} className="self-center w-52 h-52 bg-gray-300 rounded-full shrink-0"></Image>
        default:
            return;
    }


}
export default UserObj;