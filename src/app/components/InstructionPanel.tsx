import React from 'react';
import { FaRegFaceLaughWink, FaRegFaceMeh, FaRegFaceFlushed, FaCode } from 'react-icons/fa6';
import { badgeColour } from '.';
import KataLikes from './KataLikes';
import { kataLibrary } from '../katas/katalibrary/kataLibrary';
import { useSearchParams } from 'next/navigation';
import { useChangeLikes } from '@/Utils/useChangeLikes';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/Store';
import { openPairModal, openProfilePair } from '@/redux/features/pair-slice';
import { useAppSelector } from '@/redux/Store';
import { Kata } from '../katas/katalibrary/kataLibrary';

type InstructionPanelProps = {
  kata: Kata;
  setIsOpen: any;
};

const InstructionPanel: React.FC<InstructionPanelProps> = ({kata, setIsOpen}) => {
  return (
    <>
      <section className='flex flex-col gap-1 overflow-auto p-4'>
        <div className='mb-2 flex gap-2'>
          <span className='py-1.3 inline-flex items-center justify-center gap-1 rounded-full bg-primary px-2.5 text-sm  text-teal-950'>
            <FaCode />
            {kata.category}
          </span>
          <span className={`${badgeColour[kata.difficulty]} py-1.3 inline-flex items-center justify-center gap-1 rounded-full px-2.5 text-sm`}>
            {kata.difficulty === 'Easy' ? (
              <FaRegFaceLaughWink />
            ) : kata.difficulty === 'Moderate' ? (
              <FaRegFaceMeh />
            ) : (
              <FaRegFaceFlushed />
            )}
            {kata.difficulty}
          </span>
          <KataLikes kataId={kata.id} likesOnClick={true} />
        </div>
        <h2 className='text-lg'>Description:</h2>
        <p className='text-base'>{kata.problemStatement}</p>
        <button onClick={() => setIsOpen(true)} className='w-max border px-2 '>
          Pair up with someone!
        </button>
      </section>
    </>
  );
};
export default InstructionPanel;
