'use client'

import { AppDispatch, useAppSelector } from '@/redux/Store';
import { closePairModal } from '@/redux/features/pair-slice';
import React from 'react';
import { IoClose } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import ProfilePair from './ProfilePair';
import KataPair from './KataPair';

type PairModalProps = {};

const PairModal: React.FC<PairModalProps> = () => {
  const isOpen = useAppSelector(state => state.pairModalStateReducer.value.isOpen);
  // const page = useAppSelector(state => state.pairModalStateReducer.value.page)
  const page = 'kata'
  const dispatch = useDispatch<AppDispatch>();
  return (
    isOpen && (
      <>
        <div className='Modal rounded-t-lg'>
          <header className='relative rounded-t-lg bg-grey-800'>
            <h1 className='text-xl pl-7 p-4'>
              {page === 'profile' ? 
              'Pair up with our amazing coders' :
              'Pick their brains with these katas'
              }</h1>
            <button className='absolute inset-y-0 right-0 p-5 text-xl transition hover:scale-125' onClick={() => dispatch(closePairModal())}>
              <IoClose />
            </button>
          </header>
          <div className='rounded-b-lg border border-grey-600 bg-grey-700'>
            {page === 'profile' ? <ProfilePair /> : <KataPair />}
          </div>
        </div>
        <div className='Modal-overlay' onClick={() => dispatch(closePairModal())}></div>
      </>
    )
  );
};
export default PairModal;
