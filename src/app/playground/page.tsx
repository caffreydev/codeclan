'use client';
import Split from 'react-split';
import InstructionPanel from '../components/InstructionPanel';
import { useState } from 'react';
import Confetti from 'react-confetti';
import { toast } from 'react-toastify';
import ReactCodeMirror from '@uiw/react-codemirror';
import { kataLibrary } from '../katas/katalibrary/kataLibrary';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import { useSearchParams } from 'next/navigation';
import ControlPanel from '../components/ControlPanel';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/Store';
import { setCurrentKata } from '@/redux/features/currentKata-slice';

type pageProps = {};

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
  const kataId = useSearchParams().get('kata_id');
  const dispatch = useDispatch<AppDispatch>()
  const [codeText, setCodeText] = useState<string>(kataLibrary[kataId].starterCode);
  const [message, setMessage] = useState<string>('Build your code and hit run!');
  const [success, setSuccess] = useState<boolean>(false);
  const [kata, setKata] = useState<any>(kataLibrary[kataId]);
  const [isLoading, setIsLoading] = useState(false);
  
  dispatch(setCurrentKata(kata))

  try {
    const w = window.innerWidth;
    const h = window.innerHeight;
  } catch {}
  
  const handleChangeValue = (value: string) => {
    setCodeText(value);
  };

  const handleTestCase = () => {
    setMessage('');
    setIsLoading(true);
    try {
      const userFunc = new Function(`return ${codeText}`)();
      const testResult = kata.handlerFunction(userFunc);

      if (!testResult.length) {
        setIsLoading(false);
        setSuccess(true);
        toast.success('Great work, you passed all the tests!', {
          position: 'bottom-center',
          autoClose: 2000,
          theme: 'dark',
        });
      } else {
        setIsLoading(false);
        let failedTests = ' ';

        testResult.forEach((test: number) => {
          failedTests += test + ', ';
        });

        setMessage('You failed the following tests:' + failedTests.slice(0, failedTests.length - 2));
        toast.error('You failed, please try again!', {
          position: 'bottom-right',
          autoClose: 2000,
          theme: 'dark',
        });
      }
    } catch (e: any) {
      setIsLoading(false);
      setMessage(e);
      toast.error(`There's a bug in your code!`, {
        position: 'bottom-right',
        autoClose: 2000,
        theme: 'dark',
      });
    }

    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <>
      <ControlPanel kata={kata} />
      <main className='h-full'>
        {success && <Confetti gravity={0.3} tweenDuration={4000} width={w - 25} height={h - 1} />}
        <Split minSize={0} className='split h-full'>
          <InstructionPanel kata={kata} />
          <section>
            <Split minSize={0} direction='vertical' className='h-full'>
              <div className='w-full overflow-auto bg-[#1e1e1e]'>
                <ReactCodeMirror
                  onChange={handleChangeValue}
                  value={codeText}
                  theme={vscodeDark}
                  extensions={[javascript()]}
                  style={{ fontSize: 14 }}
                  autoFocus={true}
                />
              </div>
              <div className='relative'>
                <p className='p-3'>{message}</p>
                <footer className='absolute bottom-0 left-0 right-0 z-50 flex gap-3 bg-grey-600 p-3'>
                  <button
                    disabled={isLoading}
                    data-disabled={isLoading}
                    className='w-full rounded-lg bg-grey-300 px-3 py-2 hover:bg-opacity-60 data-[disabled=true]:cursor-not-allowed'
                    onClick={() => handleTestCase()}>
                    Run
                  </button>
                  <button className='w-full rounded-lg bg-primary px-3 py-2 hover:bg-opacity-60'>Submit</button>
                </footer>
              </div>
            </Split>
          </section>
        </Split>
      </main>
    </>
  );
};
export default page;
