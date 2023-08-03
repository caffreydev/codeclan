import React from 'react';
import { kataLibrary } from "../katas/katalibrary/kataLibrary.ts"

type InstructionsPanelProps = {

};

const InstructionsPanel: React.FC<InstructionsPanelProps> = () => {

	return <section className='p-4'>
		<h3 className='text-center text-2xl text-primary mb-5'>{kataLibrary[0].title}</h3>
		<p className='text-base'>{kataLibrary[0].problemStatement}</p>
	</section>
}
export default InstructionsPanel;
