import React from 'react';
import { kataLibrary } from "../katas/katalibrary/kataLibrary"
import { FaRegFaceLaughWink, FaRegFaceMeh, FaRegFaceFlushed, FaCode } from "react-icons/fa6";
type InstructionsPanelProps = {
	kata: number
};

const badgeColour = {
	Easy: "text-green-700 bg-green-300",
	Moderate: "text-yellow-700 bg-yellow-300",
	Hard: "text-red-700 bg-red-300",
	Fiendish: "text-purple-700 bg-purple-300"
}

const InstructionsPanel: React.FC<InstructionsPanelProps> = ({ kata }) => {
	return <section className='p-4 flex flex-col gap-1' >
		<h3 className='text-xl text-primary mb-2'>{`${kataLibrary[kata].id} - ${kataLibrary[kata].title}`}</h3>
		<div className='mb-2 flex gap-2'>
			<span className='inline-flex items-center justify-center text-sm rounded-full px-2.5 py-1.3 gap-1 text-teal-950  bg-primary'>
				<FaCode />
				{kataLibrary[kata].category}</span>
			<span className={`${badgeColour[kataLibrary[kata].difficulty]} inline-flex items-center justify-center text-sm rounded-full px-2.5 py-1.3 gap-1`}>
				{kataLibrary[kata].difficulty === "Easy" ? <FaRegFaceLaughWink /> : kataLibrary[kata].difficulty === "Moderate" ? <FaRegFaceMeh /> : <FaRegFaceFlushed />
				}
				{kataLibrary[kata].difficulty}
			</span>
		</div>
		<h2 className='text-lg'>Description:</h2>
		<p className='text-base'>{kataLibrary[kata].problemStatement}</p>
	</section>
}
export default InstructionsPanel;
