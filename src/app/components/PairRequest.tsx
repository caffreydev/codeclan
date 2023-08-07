import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  messagingSenderId:process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  apiId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);




export default function PairRequest ({requestDetails}) {

const {username, kata_name} = requestDetails
const docRef = await addDoc(collection(db, "requests"), {
    username:  username,
    kata_name: kata_name
  }, );

    return (


   <h1>{username}
   ADFADF
   </h1>
    )



}

