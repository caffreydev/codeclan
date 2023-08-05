import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { FaAngleRight, FaAngleLeft, FaBars } from "react-icons/fa6";

type ControlPanelProps = {

};

const ControlPanel: React.FC<ControlPanelProps> = () => {
	const kataId = Number(useSearchParams().get("kata_id"))

	return <nav className='fixed left-0 right-0 top-14 py-1 px-4 flex items-center z-30 bg-grey-600 text-xs h-12 justify-center gap-5'>
		<div className='flex items-center gap-2'>
			<Link href={`/playground?kata_id=${kataId > 0 ? kataId - 1 : 0}`} className='text-xl bg-grey-300 hover:bg-grey-200 rounded'>
				<span>
					<FaAngleLeft />
				</span>
			</Link>
			<Link href="/katas" className='flex gap-1 text-lg justify-center items-center'> <FaBars className="text-base text-grey-200" /> Katas</Link>
			<Link href={`/playground?kata_id=${kataId + 1}`} className='text-xl bg-grey-300 hover:bg-grey-200 rounded'>
				<span>
					<FaAngleRight />
				</span>
			</Link>
		</div>
		<span className='rounded-lg text-grey-150 px-2 py-1 bg-grey-300'>
			JavaScript
		</span>

	</nav>
}
export default ControlPanel;
