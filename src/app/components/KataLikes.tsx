'use client';

import React, { useEffect, useState } from 'react';
import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import { auth, firestore } from '@/firebase/firebase';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

type KataLikesProps = {
  kataTitle: string;
};

const KataLikes: React.FC<KataLikesProps> = ({ kataTitle }) => {
  const [loading, setLoading] = useState(true);

  const kata = useGetKata(kataTitle, setLoading);

  if (loading) return <></>;

  return (
    <>
      <p>
        <span className='py-1.3 inline-flex items-center justify-center gap-1 rounded-full bg-green-500 px-2.5 text-sm text-white'>
          <FaThumbsUp />
          {kata.likes}
        </span>
      </p>
      <p>
        <span className='py-1.3 inline-flex items-center justify-center gap-1 rounded-full bg-red-500 px-2.5 text-sm text-white'>
          <FaThumbsDown />
          {kata.dislikes}
        </span>
      </p>
    </>
  );
};
export default KataLikes;

// custom hook to retrieve from database
function useGetKata(kataTitle: string, setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
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
        const docRef = doc(firestore, 'problems', kataTitle);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();

        if (docSnap) {
          setKata(data);
          setLoading(false);
        }
      } catch {}
    };

    getKata();
  }, [kataTitle]);

  return kata;
}
