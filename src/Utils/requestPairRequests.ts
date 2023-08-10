import { firestore } from '@/firebase/firebase';

import { useState, useEffect } from 'react';

import { collection, getDocs } from 'firebase/firestore';
import { Request } from './pairRequest';

export function requestPairRequests(setLoadState: React.Dispatch<React.SetStateAction<boolean>>) {
  const [requests, setRequests] = useState<Request[]>([]);

  useEffect(() => {
    const requestArray: Request[] = [];
    const res = async () => {
      const querySnapshot = await getDocs(collection(firestore, 'requests'));

      querySnapshot.forEach((doc) => requestArray.push(doc.data() as Request));
      setRequests(requestArray);
      setLoadState(true);
    };

    res();
  }, [setLoadState]);

  return requests;
}
