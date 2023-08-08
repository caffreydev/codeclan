'use client';

import { Message } from '@/app/components';
import { firestore } from '@/firebase/firebase';
import { Query, QueryCompositeFilterConstraint, QueryConstraint, QueryFieldFilterConstraint, collection, getDocs, or, query, where } from 'firebase/firestore';
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
  let whereClause: QueryCompositeFilterConstraint | QueryFieldFilterConstraint;

  useEffect(() => {
    const getMessages = async () => {
      try {
        let q = query(collection(firestore, 'messages'), where('toId', '==', userId));

        if (boxType === 'Outbox') {
          q = query(collection(firestore, 'messages'), where('fromId', '==', userId));
        } else if (boxType === 'Chat View') {
          q = query(
            collection(firestore, 'messages'),
            or((where('toId', '==', userId), where('fromId', '==', friendId)), (where('fromId', '==', userId), where('toId', '==', friendId))),
          );
        }

        const querySnapshot = await getDocs(q);
        const messagesArray: Message[] = [];
        querySnapshot.forEach((doc) => messagesArray.push(doc.data() as Message));

        setMessages(() => {
          return messagesArray.sort((a, b) => b.timeStamp.seconds - a.timeStamp.seconds);
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
