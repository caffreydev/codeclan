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
  photoURL: string;
  joinTime: Timestamp;
  completedKatas: string[];
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
  likedBy: Array<string>;
  dislikedBy: Array<string>;
}

export interface FeedbackFirestore {
  userId: string;
  kataId: number;
  feedbackType: 'like' | 'dislike';
}
