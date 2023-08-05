import React from 'react';
import { FaRegFaceLaughWink, FaRegFaceMeh, FaRegFaceFlushed, FaCode } from 'react-icons/fa6';
import { badgeColour } from '.';

type InstructionPanelProps = {};

const InstructionPanel: React.FC<InstructionPanelProps> = ({ kata }: any) => {
  return (
    <section className='flex flex-col gap-1 overflow-auto p-4'>
      <div className='mb-2 flex gap-2'>
        <span className='py-1.3 inline-flex items-center justify-center gap-1 rounded-full bg-primary px-2.5 text-sm  text-teal-950'>
          <FaCode />
          {kata.category}
        </span>
        <span className={`${badgeColour[kata.difficulty]} py-1.3 inline-flex items-center justify-center gap-1 rounded-full px-2.5 text-sm`}>
          {kata.difficulty === 'Easy' ? <FaRegFaceLaughWink /> : kata.difficulty === 'Moderate' ? <FaRegFaceMeh /> : <FaRegFaceFlushed />}
          {kata.difficulty}
        </span>
      </div>
      <h2 className='text-lg'>Description:</h2>
      <p className='text-base'>{kata.problemStatement}</p>
    </section>
  );
};
export default InstructionPanel;
