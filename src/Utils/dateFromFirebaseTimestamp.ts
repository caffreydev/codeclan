import { Timestamp } from 'firebase/firestore';

export const dateFromFirebaseTimestamp = (timeStamp: Timestamp) => {
  const seconds = timeStamp.seconds;

  return new Date(seconds * 1000).toLocaleString();
};
