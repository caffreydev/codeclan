import { Timestamp } from 'firebase/firestore';

export const badgeColour = {
  Easy: 'text-green-700 bg-green-300',
  Moderate: 'text-yellow-700 bg-yellow-300',
  Hard: 'text-red-700 bg-red-300',
  Fiendish: 'text-purple-700 bg-purple-300',
};

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
