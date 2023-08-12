import React from 'react';
import { FaRegFaceLaughWink, FaRegFaceMeh, FaRegFaceFlushed, FaCode } from 'react-icons/fa6';
import { badgeColour } from '.';
import KataLikes from './KataLikes';
import { kataLibrary } from '../katas/katalibrary/kataLibrary';
import { useSearchParams } from 'next/navigation';
import { kataTestsAsText } from '../katas/katalibrary/kataTestsAsText';
import { Seymour_One } from 'next/font/google';

type InstructionPanelProps = {
  setIsOpen: any;
};

const InstructionPanel: React.FC<InstructionPanelProps> = ({ setIsOpen }) => {
  const params = useSearchParams();
  const kataId = parseInt(params.get('kata_id') as string) || 0;

  return (
    <section className='flex flex-col gap-2 overflow-auto p-4'>
      <div className='mb-2 flex flex-wrap justify-between'>
        <div className='flex items-center gap-2'>
          <span className='py-1.3 hidden items-center justify-center gap-1 rounded-full bg-primary px-2.5 text-sm text-teal-950 md:inline-flex'>
            <FaCode />
            {kataLibrary[kataId].category}
          </span>
          <span className={`${badgeColour[kataLibrary[kataId].difficulty]} py-1.3 inline-flex items-center justify-center gap-1 rounded-full px-2.5 text-sm`}>
            {kataLibrary[kataId].difficulty === 'Easy' ? (
              <FaRegFaceLaughWink />
            ) : kataLibrary[kataId].difficulty === 'Moderate' ? (
              <FaRegFaceMeh />
            ) : (
              <FaRegFaceFlushed />
            )}
            {kataLibrary[kataId].difficulty}
          </span>
          <span className='py-1.3 text-300 inline-flex items-center justify-center gap-1 rounded-full bg-grey-400  px-2.5 text-sm  text-grey-200'>
            JavaScript
          </span>
        </div>
        <div className='flex gap-2'>
          <KataLikes kataId={kataLibrary[kataId].id} likesOnClick={true} />
        </div>
      </div>
      <h2 className='text-lg'>Description:</h2>
      <p className='text-base'>{kataLibrary[kataId].problemStatement}</p>
      <br />
      <h2 className='text-lg'>Tests</h2>
      <ol className='list-inside list-decimal'>
        {kataTestsAsText[kataId].map((testStr, index) => (
          <li key={`test ${index} of kata ${kataId}`}>{testStr}</li>
        ))}
      </ol>
      <button onClick={() => setIsOpen(true)} className='self-end rounded-lg border px-2 py-1 hover:bg-primary'>
        Pair up with someone
      </button>
    </section>
  );
};
export default InstructionPanel;
