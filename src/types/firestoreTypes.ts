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
  userId: string;
  displayName: string;
  photoUrl: string;
  joinTime: Timestamp;
  completedKatas: number[];
  Bio: string;
  Github: string;
}

export interface KataFirestore {
  category: string;
  difficulty: string;
  dislikes: number;
  id: number;
  likes: number;
  title: string;
}

export interface FeedbackFirestore {
  userId: string;
  kataId: number;
  feedbackType: 'like' | 'dislike';
}
