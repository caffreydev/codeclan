'use client'
import { kataLibrary } from "@/app/katas/katalibrary/kataLibrary"
import { useState } from "react"
import PairRequest from "@/app/components/AddPairRequest"

export default function sendRequest () {
const [inputDetails, setInputDetails] = useState({
    'message':'',
    'title':'',
    
    

})

const [requestDetails, setRequestDetails] = useState({})


const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};
 const handleSubmit = (e) => {
    e.preventDefault()
    setRequestDetails(inputDetails)
    
 }



return (
    <div>
    <h1>Send Request</h1>
    <form className="p-6 flex flex-col max-w-sm gap-3 text-grey-200" onSubmit={handleSubmit}>
    
   <input onChange={handleInputChange} type="text" placeholder="message" name="message" className="text-grey-300"/>
   <select onChange={handleInputChange} className="bg-grey-300 p-4 cursor-pointer hover:bg-grey-200 text-grey-100" name="kata_name" id="kata_name">
   <option value="none"></option>
{   
    
    kataLibrary.map((eachKata) => {return <option value={eachKata.title}>{eachKata.title}</option>})
}

   </select>
<button className="bg-grey-200 text-grey-100">Send Request</button>  



<PairRequest requestDetails={requestDetails}/>
</form>
   

    </div>
)





}

