"use client";

import React from "react";
import Login from "./Login";
import { useAppSelector } from "@/redux/Store";
import ForgotPassword from "./ForgotPassword";
import CreateAccount from "./CreateAccount";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/Store";
import { closeAuth, openAuth, changePage } from "@/redux/features/auth-slice";

type AuthenticationModalProps = {};

const AuthenticationModal: React.FC<AuthenticationModalProps> = () => {
  const dispatch = useDispatch<AppDispatch>();

  const page = useAppSelector(
    (state) => state.authModalStateReducer.value.page
  );

  const isOpen = useAppSelector(
    (state) => state.authModalStateReducer.value.isOpen
  );

  return (
    isOpen && (
      <>
        <div>
          <div className="overflow-hidden border-20 border-teal border-solid">
            <button
              onClick={() => {
                dispatch(changePage("login"));
              }}
              className={`bg-dark-grey  text-teal ${
                page === "login" ? "active-tab" : ""
              }`}
            >
              Login
            </button>
            <button
              onClick={() => {
                dispatch(changePage("createAccount"));
              }}
              className={`bg-dark-grey  text-teal ${
                page === "createAccount" ? "active-tab" : ""
              }`}
            >
              Sign Up
            </button>
          </div>
          <button
            onClick={() => {
              dispatch(closeAuth());
            }}
          >
            <IoClose />
          </button>
        </div>
        <div>
          {page === "forgotPassword" ? (
            <ForgotPassword />
          ) : page === "createAccount" ? (
            <CreateAccount />
          ) : (
            <Login />
          )}
        </div>
      </>
    )
  );
};

export default AuthenticationModal;
