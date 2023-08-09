import { User } from 'firebase/auth';
import { firestore } from '../firebase/firebase';
import { collection, setDoc, doc, deleteDoc, addDoc } from 'firebase/firestore';

const db = firestore;

export type Request = {
  message: string;
  title: string;
  receiver: string;
  sender?: string;
};

export default function pairRequest(requestDetails: Request, user: User, setRequestSent: React.Dispatch<React.SetStateAction<boolean>>) {
  const { message, title, receiver } = requestDetails;

  // const docRef = async function request() {
  //     await deleteDoc(doc(db, "requests", "fKqpbpjH4tqdU8mOklRz"));
  // }

  const docRef = async function request() {
    const docSnap = await addDoc(collection(db, 'requests'), {
      message,
      title,
      receiver,
      sender: `${user?.displayName}`,
    });
    if (docSnap) {
      setRequestSent(true)
    }
  };

  docRef();
}
