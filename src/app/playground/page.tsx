"use client"
import Split from 'react-split'
import InstructionsPanel from '../components/InstructionsPanel';
import { useState } from 'react';
import { kataLibrary } from "../katas/katalibrary/kataLibrary"
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import ReactCodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'


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


	const handleChangeValue = (value:string) => {
		setCodeText(value)		
	}


	const handleTestCase = () => {
		
		try 
		{
				const userFunc = new Function(`return ${codeText}`)()
				
		
				const testResult = kataLibrary[kataId].handlerFunction(userFunc)
				if (!testResult.length) {
					setMessage("Great work, you passed all the tests!")
				} else {
					let failedTests = " "

					testResult.forEach((test: number) => {
						failedTests += test + ", "
					})

					setMessage("You failed the following tests:" + failedTests.slice(0, failedTests.length - 2))
				}

			}
			catch (e: any)
			{
				
				setMessage(`There's a bug in your code! Error message: ${e.message}`)
			}
					
			// setTimeout(() => setMessage("Build your code and hit run!"), 2000);
	}

	return <main>
		<Split minSize={0} className='split h-full'>
			<InstructionsPanel kata={kataId} />
			<section>
				<Split direction='vertical' className='h-full'>
				<ReactCodeMirror onChange={handleChangeValue}
        value={codeText}
        theme={vscodeDark}
        extensions={[javascript()]}
        style={{fontSize:16}} />
					<div>
						<button className='bg-grey-300 py-2 px-4 rounded hover:bg-grey-200 ml-3 mt-3' onClick={() => handleTestCase()}>run</button>
						<p className="py-3">{message}</p>
					</div>
				</Split>
			</section>
		</Split>

	</main>
}
export default page;
