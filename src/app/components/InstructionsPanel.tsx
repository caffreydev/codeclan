import React from 'react';
import { kataLibrary } from "../katas/katalibrary/kataLibrary.ts"

type InstructionsPanelProps = {
	kata: number
};

const InstructionsPanel: React.FC<InstructionsPanelProps> = ({kata}) => {

	return <section className='p-4'>
		<h3 className='text-center text-2xl text-primary mb-5'>{kataLibrary[kata].title}</h3>
		<p className='text-base'>{kataLibrary[kata].problemStatement}</p>
	</section>
}
export default InstructionsPanel;
