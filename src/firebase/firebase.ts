// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXTPUBLICFIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXTPUBLICFIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXTPUBLICFIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXTPUBLICFIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXTPUBLICFIREBASE_APP_ID,
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);

export const firestore = getFirestore(app);
