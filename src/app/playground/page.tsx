"use client"
import Split from 'react-split'
import Editor from '@monaco-editor/react'
import InstructionsPanel from '../components/InstructionsPanel';
import { useState } from 'react';
import { kataLibrary } from "../katas/katalibrary/kataLibrary"

type pageProps = {

};

const page: React.FC<pageProps> = () => {
	const [value, setValue] = useState("function sum(num1, num2) { return }")

	const coderEditorConfig = {
		defaultLanguage: "javascript",
		theme: "vs-dark",
		value: value,
		onChange: (editorValue: string) => handleChangeValue(editorValue)
	}

	const handleChangeValue = (editorValue: string) => {
		setValue(editorValue)
	}

	const handleTestCase = () => {

	}

	return <main>
		<Split minSize={0} className='split h-full'>
			<InstructionsPanel />
			<section>
				<Split direction='vertical' className='h-full'>
					<Editor {...coderEditorConfig} />
					<div>
						<button className='bg-grey-300 py-2 px-4 rounded hover:bg-grey-200 ml-3 mt-3' onClick={() => handleTestCase()}>run</button>
					</div>
				</Split>
			</section>
		</Split>

	</main>
}
export default page;
