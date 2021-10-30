// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { REACT_APP_FIREBASE_KEY } from "@env";
import { getAuth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_KEY,
  authDomain: "chat-app-native-fea23.firebaseapp.com",
  projectId: "chat-app-native-fea23",
  storageBucket: "chat-app-native-fea23.appspot.com",
  messagingSenderId: "294194810377",
  appId: "1:294194810377:web:2b050c8d837f85b1b632d8",
  measurementId: "G-8CF7X6N6Q4",
};

getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
