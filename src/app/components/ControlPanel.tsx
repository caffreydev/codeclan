import Link from 'next/link';
import React from 'react';
import { FaAngleRight, FaAngleLeft, FaBars } from 'react-icons/fa6';
import { Kata, kataLibrary } from '../katas/katalibrary/kataLibrary';
import { useSearchParams } from 'next/navigation';
type ControlPanelProps = {};

const ControlPanel: React.FC<ControlPanelProps> = () => {
  const kataId = Number(useSearchParams().get('kata_id'));

  return (
    <nav className='fixed inset-x-0 top-14 z-30 flex h-11 items-center justify-end gap-5 bg-grey-600 px-4 py-1'>
      <div className='w-50 absolute inset-0 m-auto flex items-center justify-center gap-2'>
        <Link
          href={`/playground?kata_id=${kataId > 0 ? kataId - 1 : kataLibrary.length - 1}`}
          className='block rounded bg-grey-400 text-xl text-grey-200 hover:bg-grey-300'>
          <span>
            <FaAngleLeft />
          </span>
        </Link>
        <p className='text-lg text-primary'>
          {kataId + 1} - {kataLibrary[kataId].title}
        </p>
        <Link
          href={`/playground?kata_id=${kataId < kataLibrary.length - 1 ? kataId + 1 : 0}`}
          className='block rounded bg-grey-400 text-xl text-grey-200 hover:bg-grey-300'>
          <span>
            <FaAngleRight />
          </span>
        </Link>
      </div>
      <Link
        href='https://zoom.us/start/videomeeting'
        target='_blank'
        className='z-[1] cursor-pointer rounded-lg bg-primary px-3 py-0.5 text-grey-100 transition hover:bg-opacity-60 hover:text-grey-200'>
        Open a Meeting
      </Link>
    </nav>
  );
};
export default ControlPanel;
