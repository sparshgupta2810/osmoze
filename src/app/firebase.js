import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDf3FGBhIDuCdUL4eMMyp-FpzgRuXKP3sc",
  authDomain: "osmoze-21891.firebaseapp.com",
  projectId: "osmoze-21891",
  storageBucket: "osmoze-21891.appspot.com",
  messagingSenderId: "1044180470783",
  appId: "1:1044180470783:web:112ee167399c8384c475ca"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);
// export const firestore = firebase.firestore();
// export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

export default auth;