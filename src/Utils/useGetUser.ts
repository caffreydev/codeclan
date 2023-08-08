'use client';

import { User } from '@/types/firestoreTypes';
import { firestore } from '@/firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

// custom hook to retrieve from database
export function useGetUser(userId: string) {
  const [userData, setUserData] = useState<User | undefined>(undefined);

  const getUser = async () => {
    try {
      const docRef = doc(firestore, 'users', userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserData(docSnap.data() as User);
      }
    } catch {}
  };

  useEffect(() => {
    getUser();
  }, []);

  return { userData, getUser };
}
