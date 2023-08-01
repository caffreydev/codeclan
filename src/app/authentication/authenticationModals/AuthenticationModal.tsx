"use client"

import React from 'react';
import Login from './Login';
import { useAppSelector } from '@/redux/Store';
import ForgotPassword from './ForgotPassword';


type AuthenticationModalProps = {
    
};

const AuthenticationModal:React.FC<AuthenticationModalProps> = () => {
        
    const page = useAppSelector((state) => state.authModalStateReducer.value.page)

    return page === "forgotPassword" ? <ForgotPassword /> : <Login />
}

export default AuthenticationModal;