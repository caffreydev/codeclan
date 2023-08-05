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
    <ul>
      {katas.map((kata: any, index: number) => {
        return (
          <Link href='#' key={kata.id}>
            <li className={`${index % 2 !== 1 ? 'bg-grey-400' : ''} flex items-center rounded-lg p-2 transition hover:bg-grey-200`}>
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
