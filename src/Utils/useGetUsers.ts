import { firestore } from '@/firebase/firebase';
import { User } from '@/types/firestoreTypes';
import { collection, getDocs, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export function useGetUsers(setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const q = query(collection(firestore, 'users'));
        const querySnapshot = await getDocs(q);
        const usersArray: User[] = [];

        querySnapshot.forEach((doc) => usersArray.push(doc.data() as User));
        setLoading(true);
        setUsers(usersArray);
      } catch (error) {
        throw new Error('Failed to fetch data');
      }
    };
    getUsers();
  }, [setLoading]);

  return users;
}
