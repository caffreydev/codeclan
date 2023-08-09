import {auth, firestore }from "../../firebase/firebase"
import { collection, setDoc,doc , deleteDoc, addDoc} from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect,useState } from "react";

import { useGetUser } from "@/Utils/useGetUser";

;
const db = firestore




export default function PairRequest ({requestDetails, userId}) {
   
    const [user] = useAuthState(auth);
    
     const [idReceiver , setIdReceiver] = useState('')
    const [userRetrieved, setUserRetrieved] = useState(false);
    const userData = useGetUser(userId || (user?.uid as string), setUserRetrieved);

    useEffect(()=> {

        
    setIdReceiver(userData)
    }, [userRetrieved])



const {message, kata_name} = requestDetails

//  const docRef = async function request() {
//     await deleteDoc(doc(db, "requests", "paCkmLGICNN1ftlJAWLx"));
// }

const docRef = async function request() { await addDoc(collection(db, "requests", ), {
    
    message:  message,
    title: kata_name,
    sender: `${user?.displayName}`,
    receiver: `${idReceiver.displayName}` 
  }, );

}
docRef()
   



}
