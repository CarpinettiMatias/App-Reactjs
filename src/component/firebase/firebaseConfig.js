// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxGHSd5QKVNjKH0BupFAFKpzR_g4lPJKA",
  authDomain: "rj-moon.firebaseapp.com",
  projectId: "rj-moon",
  storageBucket: "rj-moon.appspot.com",
  messagingSenderId: "864115071580",
  appId: "1:864115071580:web:008e67a80a01f5dfbca499"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const BD = getFirestore(app)