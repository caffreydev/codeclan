import Link from "next/link"
import { Kata, kataLibrary } from "../katas/katalibrary/kataLibrary"
import { CgSmileMouthOpen, CgSmileNeutral, CgSmileNoMouth } from "react-icons/cg";
import KataLikes from "./KataLikes";

type KataListProps = {
	difficulty: 'Easy' | 'Moderate' | 'Hard' | 'Fiendish' | 'all';
	category: 'Arrays and Objects' | 'Strings' | 'Maths' | 'Fun' | 'all';
}

const KataList: React.FC<KataListProps> = ({ difficulty, category }) => {




	let filterLib = [...kataLibrary]

	if (difficulty != 'all') {
		filterLib = filterLib.filter((kata) => kata.difficulty === difficulty)
	}
	if (category != 'all') {
		filterLib = filterLib.filter((kata) => kata.category === category)
	}

	return (
		<>
			{
				filterLib.map((kata: Kata) => {
					const badgeColor =
						kata.difficulty === "Easy" ? "text-green-700 bg-green-300"
							: kata.difficulty === "Moderate" ? "text-yellow-700 bg-yellow-300"
								: "text-red-700 bg-pink-300"
					return (<li key={kata.title} className={`bg-grey-400 m-1 w-full hover:opacity-75 text-grey-100 py-4 px-4 rounded-lg transition`}>
						<Link href={`/playground?kata_id=${kata.id}`}>
							<div className="collapse-title absolute">
								<h3 className="text-grey-150 text-lg hover:text-primary">{kata.title}</h3>
							</div>
						</Link>
						<details className={`group [&_details ::-webkit-details-marker]:hidden`}>
							<summary className="float-right rotate-90 transition-all ease-in-out"></summary>
							<p className="mt-9 text-base">Description:</p>
							<p className="leading-relaxed mt-6"> {kata.problemStatement} </p>
							<div className=" flex flex-row gap-2 mt-2">
								<p>
									<span
										className="whitespace-nowrap rounded-full text-teal-700 px-2.5 py-1.5 text-sm bg-primary"
									>
										{kata.category}
									</span>
								</p>
								<p>
									<span
										className={`${badgeColor} inline-flex items-center justify-center rounded-full px-2.5 py-0.5`}
									>
										{kata.difficulty === "Easy" ? <CgSmileMouthOpen /> : kata.difficulty === "Moderate" ? <CgSmileNeutral /> : <CgSmileNoMouth />
										}
										{kata.difficulty}
									</span>
								</p>
							
										<KataLikes kataTitle={kata.title} />
								
							</div>
						</details>
					</li >)
				})
			}
		</>
	)
}
export default KataList


