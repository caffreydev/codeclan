import Header from "../components/Header"
import ProfileDd from "../components/ProfileDd"
import SignIn from "../components/SignIn"
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
        <div className="my-10 w-5/6 mx-auto" >
        
        {/* <ProfileDd/> */}
        {/* <SignIn/> */}
    <h1 className="">List of Katas</h1>
<ul className = "flex flex-col justify-center items-center">{data.articles.map((element)=> {
    return   <li className="m-5 bg-grey-400  p-3 border-0 rounded w-full hover:bg-grey-200 transition ease-in-out"> 
 
  <div className="collapse-title">{element.title} </div>
  
  
 
  
  </li>
  })}
  
  </ul>
</div>

    )
    
}