import { firestore } from '../firebase/firebase';
import { collection, setDoc, doc, deleteDoc, addDoc, Timestamp } from 'firebase/firestore';

export type Request = {
  id: string;
  title: string;
  receiver: string;
  sender: string;
};

export default function pairRequest(requestDetails: Request, setRequestSent: React.Dispatch<React.SetStateAction<boolean>>) {
  const { id, sender, title, receiver } = requestDetails;

  const docRef = async function request() {
    try {
      const docSnap = await setDoc(doc(firestore, 'requests', id), {
        title,
        receiver,
        sender,
        id
      });
      setRequestSent(true)
    } catch {}
  };

  docRef();
}
