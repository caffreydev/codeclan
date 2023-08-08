import {auth, firestore }from "../../firebase/firebase"
import { collection, setDoc,doc , deleteDoc} from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';




;
const db = firestore




export default function PairRequest ({requestDetails}) {
    const [user] = useAuthState(auth);

const {message, kata_name} = requestDetails

// const docRef = async function request() {
//     await deleteDoc(doc(db, "pairRequests", "demoUser"));
// }

const docRef = async function request() { await setDoc(doc(db, "pairRequests", `${user.displayName}`), {
    
    message:  message,
    title: kata_name
  }, );

}
docRef()
    return (


   <h1>{}
   
   </h1>
    )



}
