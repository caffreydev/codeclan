"use client"

import React, { useEffect, useState } from 'react';
import {collection, doc, getDoc, getDocs, query} from 'firebase/firestore'
import { auth, firestore } from '@/firebase/firebase';
import {FaThumbsUp, FaThumbsDown} from "react-icons/fa";

type KataLikesProps = {
	kataTitle: string
};

const KataLikes:React.FC<KataLikesProps> = ({kataTitle}) => {
		const [loading, setLoading] = useState(true)


	const kata = useGetKata(kataTitle, setLoading)
	
	if (loading) return <></>

	return (
	<>
	<p><span 
	className="text-white bg-green-500 inline-flex items-center justify-center rounded-full px-2.5 py-0.5">
		{kata.likes}<span className="px-2"><FaThumbsUp /></span></span></p>
		<p><span 
	className="text-white bg-red-500 inline-flex items-center justify-center rounded-full px-2.5 py-0.5">
		{kata.dislikes}<span className="px-2"><FaThumbsDown /></span></span></p>
		</>)
}
export default KataLikes;


// custom hook to retrieve from database
function useGetKata (kataTitle: string, setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
	const [kata, setKata] = useState({
		category: '',
		difficulty: '',
		dislikes: 0,
		id: -1,
		likes: 0,
		title: ''
	})
	

	useEffect(() => {
		const getKata = async () => {
	
			try {
				const docRef = doc(firestore, "problems", kataTitle)
				const docSnap = await getDoc(docRef)
				const data = docSnap.data()
				

				if (docSnap) {
				setKata(data)
				setLoading(false)
				}
			}
			catch {
				
			}

		}

		getKata()
	}, [kataTitle])

	return kata
}
