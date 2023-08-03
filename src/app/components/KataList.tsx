import Link from "next/link"
import { Kata, kataLibrary } from "../katas/katalibrary/kataLibrary"


type KataListProps = {
	difficulty: 'Easy' | 'Moderate' | 'Hard' | 'Fiendish' | 'all';
  category: 'Arrays and Objects' | 'Strings' | 'Maths' | 'Fun' | 'all';

}


const KataList: React.FC<KataListProps> = ({difficulty, category}) => {

  let filterLib = [...kataLibrary]

  

   
  
   if (difficulty != 'all')
   {
   filterLib = filterLib.filter((kata)=> kata.difficulty === difficulty)
   }
   if (category != 'all')
   {
   filterLib = filterLib.filter((kata)=> kata.category === category)
   }



return ( 
  <>
  {
   filterLib.map((element: Kata, i: number) => {
       
        return (<li className={`bg-grey-${i % 2 === 0 ? "4" : "3"}00 m-1 rounded  w-full hover:bg-grey-200 text-grey-100 py-2 px-3 rounded transition`}>
  
       <Link href={`/playground?kata_id=${element.id}`}><div className="collapse-title absolute">{element.title}</div></Link>
        <details className={`group [&_details ::-webkit-details-marker]:hidden`}>
        <summary className="float-right sticky">Description</summary>
        <p className="leading-relaxed mt-6"> {element.problemStatement} </p>
        <div className=" flex flex-row ">
        <p className="p-1 bg-grey-100 text-grey-300 rounded w-max">{element.category} </p>
        <p className ="p-1 bg-grey-100 text-grey-300 rounded w-max ml-3">{element.difficulty} </p>
        </div>
  	</details>
 	</li> )
       } )
			}
		
			 
			 </>
) 
}


export default KataList
