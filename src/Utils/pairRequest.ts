import { User } from 'firebase/auth';
import { firestore } from '../firebase/firebase';
import { collection, setDoc, doc, deleteDoc, addDoc, Timestamp } from 'firebase/firestore';

const db = firestore;

export type Request = {
  id: string;
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
    const timeStamp = new Timestamp(Math.floor(new Date().getTime() / 1000), 0);
    const idString = `From ${user?.displayName} to ${receiver} at ${timeStamp}`;
    const docSnap = await addDoc(collection(db, 'requests', idString), {
      message,
      title,
      receiver,
      sender: `${user?.displayName}`,
      id: idString
    });
    if (docSnap) {
      setRequestSent(true)
    }
  };

  docRef();
}
