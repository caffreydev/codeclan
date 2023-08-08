import React from 'react';
import { FaRegFaceLaughWink, FaRegFaceMeh, FaRegFaceFlushed, FaCode } from 'react-icons/fa6';
import { badgeColour } from '.';
import KataLikes from './KataLikes';
import { kataLibrary } from '../katas/katalibrary/kataLibrary';
import { useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/Store';
import { openProfilePair } from '@/redux/features/profilePair-slice';
import { useAppSelector } from '@/redux/Store';


type InstructionPanelProps = {};

const InstructionPanel: React.FC<InstructionPanelProps> = () => {
  const kataId = Number(useSearchParams().get('kata_id'));
  const dispatch = useDispatch<AppDispatch>()
  const isOpen = useAppSelector((state) => state.profilePairReducer.value.isOpen);


  const handleClick = () => {
    console.log('button clicked')
    dispatch(openProfilePair())
    console.log(isOpen)
  }

  return (<>
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
        {/* <KataLikes /> */}
      </div>
      <h2 className='text-lg'>Description:</h2>
      <p className='text-base'>{kataLibrary[kataId].problemStatement}</p>
      <button onClick={handleClick} className='w-max border px-2 '>Pair up with someone!</button>
    </section>
    {/* <button type="button" popovertarget="modal" popovertargetaction="show"> Sign up!</button>
    <dialog id="modal" popover>
      <button popovertarget="modal" popovertargetaction="hide" class="btn btn-primary">
          Close Modal
      </button>
    </dialog> */}
  </>
  );
};
export default InstructionPanel;
