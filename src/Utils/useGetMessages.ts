'use client';

import { Message } from '@/app/components';
import { firestore } from '@/firebase/firebase';
import { QueryCompositeFilterConstraint, collection, getDocs, or, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

// custom hook to retrieve from database
export function useGetMessages(
  userId: string,
  boxType: 'Inbox' | 'Outbox' | 'Chat View',
  setMessagesRetrieved: React.Dispatch<React.SetStateAction<boolean>>,
  friendId: string = '',
) {
  const [messages, setMessages] = useState<Message[]>([]);
  let whereClause: QueryCompositeFilterConstraint;
  switch (boxType) {
    case 'Inbox':
      where('toId', '==', userId);
      break;
    case 'Outbox':
      where('fromId', '==', userId);
      break;
    case 'Chat View':
      or((where('toId', '==', userId), where('fromId', '==', friendId)), (where('fromId', '==', userId), where('toId', '==', friendId)));
      break;
    default:
      break;
  }

  useEffect(() => {
    const getMessages = async () => {
      try {
        const q = query(collection(firestore, 'messages'), whereClause);
        const querySnapshot = await getDocs(q);
        const messagesArray: Message[] = [];
        querySnapshot.forEach((doc) => messagesArray.push(doc.data() as Message));

        setMessages(() => {
          return messagesArray.sort((a, b) => a.timeStamp.seconds - b.timeStamp.seconds);
        });
        setMessagesRetrieved(true);
      } catch {
        toast.error('Failed to get messages, please try again');
      }
    };

    getMessages();
  }, [setMessagesRetrieved, userId, boxType]);

  return messages;
}
