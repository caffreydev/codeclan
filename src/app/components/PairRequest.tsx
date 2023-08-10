import {auth, firestore }from "../../firebase/firebase"
import { collection, setDoc,doc , deleteDoc, addDoc} from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect,useState } from "react";

import { useGetUser } from "@/Utils/useGetUser";

;
const db = firestore




export default function PairRequest ({requestDetails, userId}) {
   
    const [user] = useAuthState(auth);
    
     const [idReceiver , setIdReceiver] = useState({})
    const [userRetrieved, setUserRetrieved] = useState(false);
    const userData = useGetUser(userId, setUserRetrieved);
console.log(userData)
    useEffect(()=> {

        
    setIdReceiver(userData)
    }, [userRetrieved])



const {message, title} = requestDetails

//  const docRef = async function request() {
//     await deleteDoc(doc(db, "requests", "1XR3ruebV2u8222WAsoy"));
// }

const docRef = async function request() { await addDoc(collection(db, "requests", ), {
    
    message:  message,
    title: title,
    sender: `${user?.displayName}`,
    receiver: `${idReceiver.displayName}` 
    
  }, );

}


docRef()
   



}
