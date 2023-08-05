import Link from 'next/link';
import React from 'react';
import { FaAngleRight, FaAngleLeft, FaBars } from 'react-icons/fa6';

type ControlPanelProps = {};

const ControlPanel: React.FC<ControlPanelProps> = ({ kata }: any) => {
  return (
    <nav className='fixed inset-x-0 top-14 z-30 flex h-10 items-center justify-between gap-5 bg-grey-600 px-4 py-1'>
      <div className='flex items-center'>
        <h3 className='text-lg text-primary'>{`${kata.id} - ${kata.title}`}</h3>
      </div>
      <div className='absolute inset-0 m-auto flex w-40 items-center justify-center gap-2'>
        <Link href={`/playground?kata_id=#`} className='block rounded bg-grey-300 text-xl hover:bg-grey-200'>
          <span>
            <FaAngleLeft />
          </span>
        </Link>
        <Link href='/katas' className='flex items-center justify-center gap-1 text-lg'>
          {' '}
          <FaBars className='text-base text-grey-200' /> Katas
        </Link>
        <Link href={`/playground?kata_id=#`} className='block rounded bg-grey-300 text-xl hover:bg-grey-200'>
          <span>
            <FaAngleRight />
          </span>
        </Link>
      </div>
      <span className='rounded-lg bg-grey-300 px-2 py-1 text-xs text-grey-150'>JavaScript</span>
    </nav>
  );
};
export default ControlPanel;
