"use client"
import Split from 'react-split'
import InstructionsPanel from '../components/InstructionsPanel';
import { useState } from 'react';
import { kataLibrary } from "../katas/katalibrary/kataLibrary"
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import ReactCodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useSearchParams } from 'next/navigation'
import ControlPanel from '../components/ControlPanel';
import Confetti from 'react-confetti'

type pageProps = {

};

/* 
function fibonnaciFunTime(n) {

switch (n) {
	case 0: 
		return 0
	case 1: return 1
	case 2: return 1
	default: return fibonnaciFunTime(n - 1) + fibonnaciFunTime(n - 2)
}
}
*/

const page: React.FC<pageProps> = () => {
	const kataId = useSearchParams().get("kata_id")
	const [codeText, setCodeText] = useState<string>(kataLibrary[kataId].starterCode)
	const [message, setMessage] = useState<string>("Build your code and hit run!")
	const [success, setSuccess] = useState<boolean>(false)
	const w = window.innerWidth;
	const h = window.innerHeight;

	const handleChangeValue = (value: string) => {
		setCodeText(value)
	}

	const handleTestCase = () => {


		try {
			const userFunc = new Function(`return ${codeText}`)()
			const testResult = kataLibrary[kataId].handlerFunction(userFunc)

			if (!testResult.length) {
				setSuccess(true)
				setMessage("Great work, you passed all the tests!")
			} else {
				let failedTests = " "

				testResult.forEach((test: number) => {
					failedTests += test + ", "
				})

				setMessage("You failed the following tests:" + failedTests.slice(0, failedTests.length - 2))
			}
		}
		catch (e: any) {

			setMessage(`There's a bug in your code! Error message: ${e.message}`)
		}

		setTimeout(() => setSuccess(false), 5000);
	}

	return <>
		<ControlPanel />
		<main className='mt-9'>
			{success &&
				<Confetti
					gravity={0.3}
					tweenDuration={4000}
					width={w - 25}
					height={h - 1}
				/>}
			<Split minSize={0} className='split h-full'>
				<InstructionsPanel kata={kataId} />
				<section>
					<Split minSize={0} direction='vertical' className='h-full'>
						<div className='w-full overflow-auto'>
							<ReactCodeMirror onChange={handleChangeValue}
								value={codeText}
								theme={vscodeDark}
								extensions={[javascript()]}
								style={{ fontSize: 16 }}
							/>
						</div>
						<div className=''>
							<button className='bg-grey-300 px-3 py-1.5 rounded-lg hover:bg-opacity-60 ml-3 mt-3' onClick={() => handleTestCase()}>Run</button>
							<button className="bg-primary px-3 py-1.5 hover:bg-opacity-60 rounded-lg ml-3">Submit</button>
							<p className="py-3">{message}</p>
						</div>
					</Split>
				</section>
			</Split>
		</main >
	</>
}
export default page;
