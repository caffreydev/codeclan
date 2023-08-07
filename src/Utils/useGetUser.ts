'use client';

import { User } from '@/types/firestoreTypes';
import { firestore } from '@/firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

// custom hook to retrieve from database
export function useGetUser(userId: string, setUserRetrieved: React.Dispatch<React.SetStateAction<boolean>>) {
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const getUser = async () => {
      try {
        const docRef = doc(firestore, 'users', userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserRetrieved(true);
          setUser(docSnap.data() as User);
        }
      } catch {
        toast.error('Failed to load messages, please try again');
      }
    };

    getUser();
  }, [userId, setUserRetrieved]);

  return user;
}
