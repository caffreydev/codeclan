"use client";

import React from "react";
import KataList from "../components/KataList";
import { useState } from "react";
import Wrapper from "../components/Wrapper";

type category = 'Arrays and Objects' | 'Strings' | 'Maths' | 'Fun' | 'all'
type difficulty = 'Easy' | 'Moderate' | 'Hard' | 'Fiendish' | 'all'

export default function katas() {

	function selectCategory(e: React.ChangeEvent<HTMLSelectElement>) {
		const category = e.target.value as category
		setCategory(category)
	}

	function selectDifficulty(e: React.ChangeEvent<HTMLSelectElement>) {
		const difficulty = e.target.value as difficulty
		setDifficulty(difficulty)
	}

	const [difficulty, setDifficulty] = useState<difficulty>('all')
	const [category, setCategory] = useState<category>('all')

	return (<>
		<div className='mx-auto max-w-screen-xl'>
			<Wrapper>
				<h1 className="my-7 text-3xl font-bold">List of Katas</h1>
				<div className="flex flex-row w-full bg-grey-300 rounded-t-lg">
					<select className="bg-grey-300 p-4 cursor-pointer hover:bg-grey-200 rounded-tl-lg" name="difficulty" id="difficulty" onChange={(e) => { selectDifficulty(e) }}>
						<option value="all">All</option>
						<option value="Easy">Easy</option>
						<option value="Moderate">Moderate</option>
						<option value="Hard">Hard</option>
						<option value="Fiendish">Fiendish</option>
					</select>

					<select className=" bg-grey-300 p-4 cursor-pointer hover:bg-grey-200" name="category" id="category" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { selectCategory(e) }}>
						<option value="all">All</option>
						<option value="Maths">Maths</option>
						<option value="Arrays and Objects">Arrays and Objects</option>
						<option value="Strings">Strings</option>
						<option value="Fun">Fun</option>
					</select>
				</div>
				<ul className="flex flex-col p-5 bg-grey-300 rounded-b-lg">
					<KataList difficulty={difficulty} category={category} />
				</ul>
			</Wrapper >
		</div>
	</>)
}



