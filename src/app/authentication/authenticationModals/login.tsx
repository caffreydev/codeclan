import React from "react";
import { useSetRecoilState } from "recoil";
import { auth } from "@/firebase/firebase";
import { authModalState } from "@/atoms/authModalAtom";

type loginProps = {};

const login: React.FC<loginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);

  const handleForgot = () => {
    setAuthModalState((prevState) => ({
      ...prevState,
      type: "forgotPassword",
    }));
  };

  return (
    <div>
      <form>
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

export default login;
