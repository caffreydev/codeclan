import Link from "next/link"
async function getData() {
    const res = await fetch('https://nc-news-render.onrender.com/api/articles')

   
    if (!res.ok) {
     
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }



export default async function katas() {


    const data = await getData()
 
        
    return (
        <div className="my-10 w-5/6 mx-auto " >
        
      
    <h1 className="p-4 -lg bg-grey-300 text-xl p-2 text-primary">List of Katas</h1>



<ul className = " bg-grey-100 flex flex-col justify-center items-center p-4  bg-grey-300 border-solid ">{data.articles.map((element: any,i: any)=> {

if(i % 2 === 0) {
    return   <li className=" bg-grey-500  p-3 border-1 rounded w-full hover:bg-grey-200 text-grey-100 py-2 px-3 rounded transitiont">
 
 <Link href={`/katas/${element.article_id}`}><div className="collapse-title">{element.title}</div></Link>
  
</li>
}
else
{
  return   <li className=" bg-grey-300  p-3 border-1 rounded w-full hover:bg-grey-200 text-grey-100 py-2 px-3 rounded transition">
 
 <Link href={`/katas/${element.article_id}`}><div className="collapse-title">{element.title}</div></Link>
  
</li>
}
  
  })}
  
  </ul>
</div>

    )
    
}