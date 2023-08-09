import { User } from 'firebase/auth';
import { firestore } from '../../../firebase/firebase';
import { collection, setDoc, doc, deleteDoc, addDoc } from 'firebase/firestore';

const db = firestore;

type Request = {
  message: string;
  title: string;
  receiver: string | undefined;
};

export default function PairRequest(requestDetails: Request, user: User) {
  const { message, title, receiver } = requestDetails;

  // const docRef = async function request() {
  //     await deleteDoc(doc(db, "requests", "fKqpbpjH4tqdU8mOklRz"));
  // }

  const docRef = async function request() {
    await addDoc(collection(db, 'requests'), {
      message,
      title,
      receiver,
      sender: `${user?.displayName}`,
    });
  };

  docRef();
}
