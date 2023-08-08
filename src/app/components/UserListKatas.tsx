'use client';
import { User } from '@/types/firestoreTypes';
import Link from 'next/link';
import React, { useState } from 'react';

type UserListKatasProps = {
  userData: User;
};

const UserListKatas: React.FC<UserListKatasProps> = (userData) => {
  return (
    <ul className='flex flex-col gap-3'>
      {userData.completedKatas?.map((kata) => {
        return <p>{kata}</p>;
        // (
        // <Link href='#' key={kata.id}>
        //   <li className={`flex items-center rounded-lg border border-grey-500  bg-grey-600 p-2 transition hover:border-primary hover:bg-grey-500`}>
        //     <p className='hover:text-grey-100'>
        //       <span className='mr-2 text-grey-200'>{kata.id}</span>
        //       {kata.title}
        //     </p>
        //   </li>
        // </Link>
        // );
      })}
    </ul>
  );
};
export default UserListKatas;
