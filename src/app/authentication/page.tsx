"use client";

import React from "react";
import AuthenticationModal from "./authenticationModals/AuthenticationModal";
import { auth } from "@/firebase/firebase";
import { changePage, closeAuth, openAuth } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/Store";
// import { loginPageAction } from "@/redux/features/actionCreators";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  // const goToLogin = loginPageAction();

  const dispatch = useDispatch<AppDispatch>();

  const handleClickSignIn = () => {
    dispatch(openAuth());
    dispatch(changePage("createAccount"));
  };

  return (
    <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center h-[calc(100vh-5rem)] space-x-5">
          <button
            onClick={handleClickSignIn}
            className="bg-teal hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login / Sign Up
          </button>
          <img src="/codeclan-logo.jpg" alt="codeclan logo" />
          <button className="bg-teal hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Demo Login
          </button>
        </div>

        <AuthenticationModal />
      </div>
    </div>
  );
};
export default page;
