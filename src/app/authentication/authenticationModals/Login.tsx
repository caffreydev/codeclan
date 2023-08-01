"use client"


import React from "react";
import { auth } from "@/firebase/firebase";
import {changePage, closeAuth} from '@/redux/features/auth-slice'
import {useDispatch} from 'react-redux'
import { AppDispatch } from "@/redux/Store";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  
  const dispatch = useDispatch<AppDispatch>()

  const handleForgot = () => {
    dispatch(changePage('forgotPassword'))
  };

  return (
    <div>
      <form className="text-white">
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
        <a href="#" onClick={handleForgot}>
          Forgot Password
        </a>
      </form>
    </div>
  );
};

export default Login;
