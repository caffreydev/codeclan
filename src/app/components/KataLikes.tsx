'use client';

import React, { useEffect, useState } from 'react';
import { collection, doc, getDoc, getDocs, query, setDoc } from 'firebase/firestore';
import { auth, firestore } from '@/firebase/firebase';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { useChangeLikes } from '@/Utils/useChangeLikes';
import { KataFirestore } from '@/types/firestoreTypes';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

type KataLikesProps = {
  kataId: number;
  likesOnClick: boolean;
};

const KataLikes: React.FC<KataLikesProps> = ({ kataId, likesOnClick }) => {
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const [user] = useAuthState(auth);

  const kata = useGetKata(kataId, setLoading);

  const useLikesOnClick = async () => {
    if (likesOnClick) {
      setLiked(true);
      const newKataObj = {
        ...kata,
      };
      newKataObj.likes = newKataObj.likes + 1;

      try {
        const ref = await setDoc(doc(firestore, 'problems', String(newKataObj.id)), newKataObj);
        const feedbackTitle = `${user?.uid as string} liked kata ${kataId}`;
        const feedbackEntry = {
          userId: user?.uid,
          kataId: kataId,
          feedBackType: 'like',
        };
        const ref2 = await setDoc(doc(firestore, 'feedbacks', feedbackTitle), feedbackEntry);
        toast.success('Thanks for the feedback!');
      } catch (e: any) {
        toast.error("Your feedback wasn't logged, please try again");
      }
    }
  };

  const useDislikesOnClick = async () => {
    if (likesOnClick) {
      setDisliked(true);
      const newKataObj = {
        ...kata,
      };
      newKataObj.dislikes = newKataObj.dislikes + 1;

      try {
        const ref = await setDoc(doc(firestore, 'problems', String(newKataObj.id)), newKataObj);
        const feedbackTitle = `${user?.uid as string} disliked kata ${kataId}`;
        const feedbackEntry = {
          userId: user?.uid,
          kataId: kataId,
          feedBackType: 'dislike',
        };
        const ref2 = await setDoc(doc(firestore, 'feedbacks', feedbackTitle), feedbackEntry);
        toast.success('Thanks for the feedback!');
      } catch (e: any) {
        toast.error("Your feedback wasn't logged, please try again");
      }
    }
  };

  if (loading) return <h2 className='text-2xl'>Loading Likes...</h2>;

  return (
    <>
      <p>
        <span
          onClick={useLikesOnClick}
          className={`py-1.3 inline-flex items-center justify-center gap-1 rounded-full bg-green-500 px-2.5 text-sm text-white ${
            likesOnClick ? 'hover:cursor-pointer' : ''
          } ${liked ? 'border-4 border-green-700' : ''}`}>
          <FaThumbsUp />
          {kata.likes + (liked ? 1 : 0)}
        </span>
      </p>
      <p>
        <span
          onClick={useDislikesOnClick}
          className={`py-1.3 inline-flex items-center justify-center gap-1 rounded-full bg-red-500 px-2.5 text-sm text-white ${
            likesOnClick ? 'hover:cursor-pointer' : ''
          } ${disliked ? 'border-4 border-red-700' : ''}`}>
          <FaThumbsDown />
          {kata.dislikes + (disliked ? 1 : 0)}
        </span>
      </p>
    </>
  );
};
export default KataLikes;

// custom hook to retrieve from database
function useGetKata(kataId: number, setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
  const [kata, setKata] = useState({
    category: '',
    difficulty: '',
    dislikes: 0,
    id: -1,
    likes: 0,
    title: '',
  });

  useEffect(() => {
    const getKata = async () => {
      try {
        const docRef = doc(firestore, 'problems', String(kataId));
        const docSnap = await getDoc(docRef);
        const data = docSnap.data() as KataFirestore;

        if (docSnap) {
          setKata(data);
          setLoading(false);
        }
      } catch {}
    };

    getKata();
  }, [kataId]);

  return kata;
}
