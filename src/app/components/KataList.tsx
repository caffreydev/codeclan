import Link from 'next/link';
import { Kata, kataLibrary } from '../katas/katalibrary/kataLibrary';
import { badgeColour } from '.';
import { FaRegFaceLaughWink, FaRegFaceMeh, FaRegFaceFlushed, FaCode } from 'react-icons/fa6';
import KataLikes from './KataLikes';

type KataListProps = {
  difficulty: 'Easy' | 'Moderate' | 'Hard' | 'Fiendish' | 'all';
  category: 'Arrays and Objects' | 'Strings' | 'Maths' | 'Fun' | 'all';
};

const KataList: React.FC<KataListProps> = ({ difficulty, category }) => {
  let filterLib = [...kataLibrary];

  if (difficulty != 'all') {
    filterLib = filterLib.filter((kata) => kata.difficulty === difficulty);
  }
  if (category != 'all') {
    filterLib = filterLib.filter((kata) => kata.category === category);
  }

  return filterLib.map((element: Kata) => (
    <li key={element.id} className={`relative w-full rounded-lg bg-grey-400 p-4 text-grey-100 transition hover:opacity-75`}>
      <Link href={`/playground?kata_id=${element.id}`}>
        <div className='collapse-title'>
          <h3 className='text-lg text-grey-150 hover:text-primary'>{element.title}</h3>
        </div>
      </Link>
      <details className={`[&_details ::-webkit-details-marker]:hidden group`}>
        <summary className='absolute right-0 top-0 mr-4 h-full leading-[3.5rem] transition-all ease-in-out'>
          <span className='select-none pl-1	text-xs'>Description</span>
        </summary>
        <p className='mt-2 leading-relaxed'> {element.problemStatement} </p>
        <div className=' mt-2 flex flex-row gap-2'>
          <p>
            <span className='py-1.3 inline-flex items-center justify-center gap-1 rounded-full bg-primary px-2.5 text-sm  text-teal-950'>
              <FaCode />
              {element.category}
            </span>
          </p>
          <p>
            <span className={`${badgeColour[element.difficulty]} py-1.3 inline-flex items-center justify-center gap-1 rounded-full px-2.5 text-sm`}>
              {element.difficulty === 'Easy' ? <FaRegFaceLaughWink /> : element.difficulty === 'Moderate' ? <FaRegFaceMeh /> : <FaRegFaceFlushed />}
              {element.difficulty}
            </span>
          </p>
        </div>
      </details>
    </li>
  ));
};
export default KataList;
