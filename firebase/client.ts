import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCHnbG3XKBPRvRuxE89yQGqhoyZ3dR1lT4",
  authDomain: "interviewer-e1990.firebaseapp.com",
  projectId: "interviewer-e1990",
  storageBucket: "interviewer-e1990.firebasestorage.app",
  messagingSenderId: "519377780517",
  appId: "1:519377780517:web:cc3b259cf4d1aabc3c64cc",
  measurementId: "G-0ZKGJDBXJK"
};


const app = !getApps.length?initializeApp(firebaseConfig):getApp();
export const auth=getAuth(app);
export const db = getFirestore(app);