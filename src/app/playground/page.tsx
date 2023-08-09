'use client';
import Split from 'react-split';
import InstructionPanel from '../components/InstructionPanel';
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { toast } from 'react-toastify';
import ReactCodeMirror from '@uiw/react-codemirror';
import { Kata, kataLibrary } from '../katas/katalibrary/kataLibrary';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import { useSearchParams } from 'next/navigation';
import ControlPanel from '../components/ControlPanel';
import { useGetUser } from '@/Utils/useGetUser';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from '@/firebase/firebase';
import { User } from '@/types/firestoreTypes';
import { doc, setDoc } from 'firebase/firestore';

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
  const params = useSearchParams();
  const kataId = parseInt(params.get('kata_id') as string) || 0;

  const [codeText, setCodeText] = useState<string>(kataLibrary[kataId].starterCode);
  const [message, setMessage] = useState<string>('Build your code and hit run!');
  const [success, setSuccess] = useState<boolean>(false);
  const [kata, setKata] = useState<Kata>(kataLibrary[kataId]);
  const [isLoading, setIsLoading] = useState(false);
  const [completedKatasSession, setCompletedKatasSession] = useState<string[]>([]);

  //retrieves user details
  const [user, setUser] = useAuthState(auth);
  const [userRetrieved, setUserRetrieved] = useState(false);
  const currUser = useGetUser(user?.uid as string, setUserRetrieved) as User;

  useEffect(() => {
    setCodeText(kataLibrary[kataId].starterCode);
    setKata(kataLibrary[kataId]);
    setSuccess(false);

    setMessage('Build your code and hit run!');
  }, [kataId]);

  const handleChangeValue = (value: string) => {
    setCodeText(value);
  };

  const handleTestCase = async () => {
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
        if (!user) {
          setTimeout(() => setSuccess(false), 5000);
          return;
        }

        if (!currUser?.completedKatas.includes(kata.title) && !completedKatasSession.includes(kata.title)) {
          const newUserTableEntry = { ...currUser };
          const completedKatas = [...newUserTableEntry.completedKatas];

          completedKatas.push(kata.title);
          completedKatasSession.forEach((title) => {
            if (!completedKatas.includes(title)) {
              completedKatas.push(title);
            }
          });
          newUserTableEntry.completedKatas = completedKatas;

          const ref = await setDoc(doc(firestore, 'users', newUserTableEntry.userId), newUserTableEntry);
        }
        setCompletedKatasSession((prev) => [...prev, kata.title].filter((title, index, array) => array.indexOf(title) === index));
      } else {
        setIsLoading(false);
        let failedTests = ' ';

        testResult.forEach((test: number) => {
          failedTests += test + ', ';
        });

        setMessage('You failed the following tests:' + failedTests.slice(0, failedTests.length - 2));
        toast.error('You failed, please try again!', {
          position: 'top-right',
          autoClose: 2000,
          theme: 'dark',
        });
      }
    } catch (e: any) {
      setIsLoading(false);
      setMessage(String(e));

      toast.error(`There's a bug in your code!`, {
        position: 'top-right',
        autoClose: 2000,
        theme: 'dark',
      });
    }

    setTimeout(() => setSuccess(false), 5000);
  };

  const handleResetCode = () => {
    setCodeText(kata.starterCode);
    setMessage('Build your code and hit run!');
  };

  return (
    <>
      <ControlPanel />
      <main className='h-full'>
        {success && <Confetti gravity={0.3} tweenDuration={4000} width={window.innerWidth - 25} height={window.innerHeight - 1} />}
        <Split minSize={0} className='split h-full'>
          <InstructionPanel />
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
                    className='w-full rounded-lg bg-primary px-3 py-2 hover:bg-opacity-60 data-[disabled=true]:cursor-not-allowed'
                    onClick={handleTestCase}>
                    Run
                  </button>
                  <button onClick={handleResetCode} className='w-full rounded-lg bg-gray-500 px-3 py-2 hover:bg-opacity-60'>
                    Reset to Starter Code
                  </button>
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
