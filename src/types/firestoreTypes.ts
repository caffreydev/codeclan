import { Timestamp } from 'firebase/firestore';

export interface Message {
  body: string;
  fromDisplay: string;
  fromId: string;
  id: string;
  subject: string;
  timeStamp: Timestamp;
  toDisplay: string;
  toId: string;
}

export interface User {
  Bio: string;
  Github: string;
  userId: string;
  displayName: string;
  photoURL: string;
  joinTime: Timestamp;
  completedKatas: number[];
}
