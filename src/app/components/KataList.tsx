import Link from "next/link"
import { kataLibrary } from "../katas/katalibrary/kataLibrary"

export default  function kataList(props) {

  let filterLib = [...kataLibrary]

  

   
  
   if (props.difficulty != 'all')
   {
   filterLib = filterLib.filter((kata)=> kata.difficulty === props.difficulty)
   }
   if (props.category != 'all')
   {
   filterLib = filterLib.filter((kata)=> kata.category === props.category)
   }



return ( 
  <>
  {
   filterLib.map((element: any,i: any) => {
        if (i%2 ===0) {
        return <li className=" bg-grey-400 m-1 rounded  w-full hover:bg-grey-200 text-grey-100 py-2 px-3 rounded transition">
  
       <Link href={`/katas/${element.article_id}`}><div className="collapse-title absolute">{element.title}</div></Link>
        <details className={`group [&_details ::-webkit-details-marker]:hidden`}>
        <summary className="float-right sticky">Description</summary>
        <p className="leading-relaxed mt-6"> {element.problemStatement} </p>
        <div className=" flex flex-row ">
        <p className="p-1 bg-grey-100 text-grey-300 rounded w-max">{element.category} </p>
        <p className ="p-1 bg-grey-100 text-grey-300 rounded w-max ml-3">{element.difficulty} </p>
        </div>
  </details>
 
 
 
     </li> 
       }  else {
         return   <li className=" bg-grey-300 m-1 rounded w-full hover:bg-grey-200 text-grey-100 py-2 px-3 rounded transition">
           
           
         
  
         <Link href={`/katas/${element.article_id}`}><div className="collapse-title absolute">{element.title} </div></Link>
         
       
          <details className={`group [&_summary::-webkit-details-marker]:hidden`}>
         <summary className="float-right">Description</summary>
         <p className="leading-relaxed mt-6"> {element.problemStatement} </p>
        <div className=" flex flex-row ">
        <p className="p-1 bg-grey-100 text-grey-300 rounded w-max">{element.category} </p>
        <p className ="p-1 bg-grey-100 text-grey-300 rounded w-max ml-3">{element.difficulty} </p>
        </div>
    </details>
    
    
    
    
    </li>
 
 
 
       }
 
 
 
  } )
  
  }
  </>
)




}