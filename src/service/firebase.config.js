// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



var firebaseConfig = {
  apiKey: "AIzaSyAR7mL8l26tLhk9LFcE29CY1cC3st6tmqU",
  authDomain: "task-68da4.firebaseapp.com",
  projectId: "task-68da4",
  storageBucket: "task-68da4.appspot.com",
  messagingSenderId: "249889689442",
  appId: "1:249889689442:web:cfb89dd0377a12e537e63b",
  measurementId: "G-XTN4KN96RH"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)