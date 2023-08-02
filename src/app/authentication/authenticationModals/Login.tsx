"use client";

import React, { useEffect, useState } from "react";
import { auth } from "@/firebase/firebase";
import { changePage, closeAuth } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/Store";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const dispatch = useDispatch<AppDispatch>();

  const handleForgot = () => {
    dispatch(changePage("forgotPassword"));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password) {
      return alert("You must fill in all fields!");
    }
    try {
      const login = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!login) {
        return;
      }
      dispatch(closeAuth());
    } catch (error: any) {
      alert(error?.message.replace("Firebase: Error ", "Failed login! "));
    }
  };

  useEffect(() => {
    if (error)
      alert(
        error.message
          .replace("Firebase: Error ", "Failed login! ")
          .replace("Firebase: ", "Failed login! ")
      );
  }, [error]);

  return (
    <div>
      <form className="text-white" onSubmit={handleLogin}>
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" onChange={handleChange} />
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
