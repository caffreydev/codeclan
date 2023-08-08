'use client';

import { auth, firestore } from '@/firebase/firebase';
import { FeedbackFirestore, KataFirestore } from '@/types/firestoreTypes';
import { collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

export function useChangeLikes(kataId: number, feedbackType: 'like' | 'dislike', kata: KataFirestore) {
  const [updated, setUpdated] = useState(false);
  const [user] = useAuthState(auth);
  console.log('got in the function');
  useEffect(() => {
    const changeLikes = async () => {
      try {
        const q = query(collection(firestore, 'feedbacks'), where('kataId', '==', kataId));
        const querySnapshot = await getDocs(q);
        const feedbackArray: FeedbackFirestore[] = [];
        querySnapshot.forEach((doc) => feedbackArray.push(doc.data() as FeedbackFirestore));
        if (
          feedbackArray.length > 0 &&
          feedbackArray.some((res) => {
            return res.userId === user?.uid && res.feedbackType === feedbackType;
          })
        ) {
          toast.warning(`You already ${feedbackType}d this one!`);
        } else {
          const newKataObj = {
            ...kata,
          };
          newKataObj.likes = newKataObj.likes + feedbackType === 'like' ? 1 : 0;
          newKataObj.dislikes = newKataObj.dislikes - (feedbackType === 'dislike' ? 1 : 0);
          const ref = await setDoc(doc(firestore, 'users', String(newKataObj.id)), newKataObj);
          const feedbackTitle = `${user?.uid as string} ${feedbackType}d kata ${kataId}`;
          const feedbackEntry = {
            userId: user?.uid,
            kataId: kataId,
            feedBackType: feedbackType,
          };
          const ref2 = await setDoc(doc(firestore, 'feedbacks', feedbackTitle), feedbackEntry);

          setUpdated(true);
        }
      } catch {
        toast.error('Failed to register feedback, please try again!');
      }
    };
    changeLikes();
  }, [kataId, feedbackType, user]);

  if (updated) {
    toast.success('Thanks for registering your feedback!');
  }
}
