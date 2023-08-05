import Link from "next/link"
import { Kata, kataLibrary } from "../katas/katalibrary/kataLibrary"
import { FaRegFaceLaughWink, FaRegFaceMeh, FaRegFaceFlushed, FaCode } from "react-icons/fa6";
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
				filterLib.map((element: Kata) => {
					const badgeColor =
						element.difficulty === "Easy" ? "text-green-700 bg-green-300"
							: element.difficulty === "Moderate" ? "text-yellow-700 bg-yellow-300"
								: "text-red-700 bg-pink-300"
					return (<li key={element.id} className={`bg-grey-400 m-1 w-full hover:opacity-75 text-grey-100 py-4 px-4 rounded-lg transition`}>
						<Link href={`/playground?kata_id=${element.id}`}>
							<div className="collapse-title absolute">
								<h3 className="text-grey-150 text-lg hover:text-primary">{element.title}</h3>
							</div>
						</Link>
						<details className={`group [&_details ::-webkit-details-marker]:hidden`}>
							<summary className="float-right rotate-90 transition-all ease-in-out"></summary>
							<p className="mt-9 text-base">Description:</p>
							<p className="leading-relaxed mt-2"> {element.problemStatement} </p>
							<div className=" flex flex-row gap-2 mt-2">
								<p>
									<span
										className="inline-flex items-center justify-center text-sm rounded-full px-2.5 py-1.3 gap-1 text-teal-950  bg-primary"
									>
										<FaCode />
										{element.category}
									</span>
								</p>
								<p>
									<span
										className={`${badgeColor} inline-flex items-center justify-center rounded-full px-2.5 py-1.3 gap-1 text-sm`}
									>
										{element.difficulty === "Easy" ? <FaRegFaceLaughWink /> : element.difficulty === "Moderate" ? <FaRegFaceMeh /> : <FaRegFaceFlushed />
										}
										{element.difficulty}
									</span>
								</p>
							</div>
						</details>
					</li >)
				})
			}
		</>
	)
}
export default KataList
