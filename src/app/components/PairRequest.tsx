import {auth, firestore }from "../../firebase/firebase"
import { collection, setDoc,doc , deleteDoc, addDoc} from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';




;
const db = firestore




export default function PairRequest ({requestDetails}) {
    const [user] = useAuthState(auth);

const {message, kata_name} = requestDetails

// const docRef = async function request() {
//     await deleteDoc(doc(db, "requests", "fKqpbpjH4tqdU8mOklRz"));
// }

const docRef = async function request() { await addDoc(collection(db, "requests", ), {
    
    message:  message,
    title: kata_name,
    sender: `${user?.displayName}`,
    
  }, );

}
docRef()
    return (


   <h1>{}
   
   </h1>
    )



}
