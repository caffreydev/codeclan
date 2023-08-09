import React from 'react';
import { FaRegFaceLaughWink, FaRegFaceMeh, FaRegFaceFlushed, FaCode } from 'react-icons/fa6';
import { badgeColour } from '.';
import KataLikes from './KataLikes';
import { kataLibrary } from '../katas/katalibrary/kataLibrary';
import { useSearchParams } from 'next/navigation';
import { useChangeLikes } from '@/Utils/useChangeLikes';
import { kataTestsAsText } from '../katas/katalibrary/kataTestsAsText';

type InstructionPanelProps = {};

const InstructionPanel: React.FC<InstructionPanelProps> = () => {
  const kataId = Number(useSearchParams().get('kata_id'));

  return (
    <section className='flex flex-col gap-1 overflow-auto p-4'>
      <div className='mb-2 flex gap-2'>
        <span className='py-1.3 inline-flex items-center justify-center gap-1 rounded-full bg-primary px-2.5 text-sm  text-teal-950'>
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
        <KataLikes kataId={kataLibrary[kataId].id} likesOnClick={true} />
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
    </section>
  );
};
export default InstructionPanel;
