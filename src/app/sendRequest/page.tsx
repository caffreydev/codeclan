'use client'
import { kataLibrary } from "@/app/katas/katalibrary/kataLibrary"
import { useState } from "react"
import PairRequest from "@/app/components/PairRequest"

export default function sendRequest () {
const [inputDetails, setInputDetails] = useState({
    'request_id':'',
    'username':'',
     'kata_name':'',
    

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
    <form className="p-6 flex flex-col max-w-sm gap-3" onSubmit={handleSubmit}>
    < input onChange={handleInputChange}  type="number" placeholder="request_id" name="request_id" /> 
   <input onChange={handleInputChange} type="text" placeholder="username" name="username" />
   <select onChange={handleInputChange} className="bg-grey-300 p-4 cursor-pointer hover:bg-grey-200" name="kata_name" id="kata_name">
{
    kataLibrary.map((eachKata) => {return <option value={eachKata.title}>{eachKata.title}</option>})
}

   </select>
<button className="bg-grey-200">Send Request</button>  



<PairRequest requestDetails={requestDetails}/>
</form>
   

    </div>
)





}

