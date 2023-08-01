import React from "react";
import AuthenticationModal from "./authenticationModals/AuthenticationModal";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none ">
          <img src="/codeclan-logo.jpg" alt="codeclan logo" />
        </div>
        <AuthenticationModal />
      </div>
    </div>
  );
};
export default page;
