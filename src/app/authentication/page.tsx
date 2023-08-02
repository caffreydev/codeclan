"use client";

import React from "react";
import AuthenticationModal from "./authenticationModals/AuthenticationModal";
import { auth } from "@/firebase/firebase";
import { changePage, closeAuth, openAuth } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/Store";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter  } from "next/navigation";
import Image from "next/image";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  const { push } = useRouter()
  const [signInWithEmailAndPassword, user, loading, error] =
  useSignInWithEmailAndPassword(auth);

  const dispatch = useDispatch<AppDispatch>();

  const handleClickSignIn = () => {
    dispatch(openAuth());
    dispatch(changePage("createAccount"));
  };

  const handleDemoLogin = async () => {
    const login = await signInWithEmailAndPassword("demouser@codeclan.uk", "password")
    if (login) {
      push("/dashboard")
    }
  }

  return (
    <div className="bg-grey-500 h-screen relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center h-[calc(100vh-5rem)] space-x-5">
          <Image src="/codeclan-logo.jpg" alt="codeclan logo" width={400} height={400}/>
          <div className="flex my-5 gap-24">
            <button
              onClick={handleClickSignIn}
              className="bg-grey-100 text-grey-500 hover:bg-primary hover:text-grey-100 font-bold py-2 px-4 rounded"
            >
              Login / Sign Up
            </button>
            <button onClick={handleDemoLogin} className="bg-grey-300 hover:bg-primary text-white font-bold py-2 px-4 rounded">
              Demo Login
            </button>
          </div>
        </div>

        <AuthenticationModal />
      </div>
    </div>
  );
};
export default page;
