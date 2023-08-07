import {auth, firestore }from "../../firebase/firebase"
import { collection, setDoc,doc , deleteDoc} from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import UserObjProps from "./UserObj";
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  messagingSenderId:process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  apiId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};



;
const db = firestore




export default function PairRequest ({requestDetails}) {
    const [user] = useAuthState(auth);

const {message, kata_name} = requestDetails

// const docRef = async function request() {
//     await deleteDoc(doc(db, "pairRequests", `undefined`));
// }

const docRef = async function request() { await setDoc(doc(db, "pairRequests", `${user.displayName}`), {
    
    message:  message,
    kata_name: kata_name
  }, );

}
docRef()
    return (


   <h1>{}
   
   </h1>
    )



}
