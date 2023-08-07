import Link from 'next/link';
import React from 'react';

type UserListKatasProps = {};

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?limit=10');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const UserListKatas: React.FC<UserListKatasProps> = async () => {
  const katas = await getData(); //katas user
  return (
    <ul className='flex flex-col gap-3'>
      {katas.map((kata: any, index: number) => {
        return (
          <Link href='#' key={kata.id}>
            <li className={`flex items-center rounded-lg border border-grey-500  bg-grey-600 p-2 transition hover:border-primary hover:bg-grey-500`}>
              <p className='hover:text-grey-100'>
                <span className='mr-2 text-grey-200'>{kata.id}</span>
                {kata.title}
              </p>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};
export default UserListKatas;
