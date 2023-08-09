'use client';
import { User } from '@/types/firestoreTypes';

type UserListKatasProps = {
  userData: User;
};

const UserListKatas: React.FC<UserListKatasProps> = ({ userData }) => {
  return (
    <ul className='flex flex-col gap-3'>
      {userData.completedKatas.map((kata) => {
        return (
          <li key={kata} className={`flex items-center rounded-lg border border-grey-500  bg-grey-600 p-2 transition hover:border-primary hover:bg-grey-500`}>
            <p className='hover:text-grey-100'>{kata}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default UserListKatas;
