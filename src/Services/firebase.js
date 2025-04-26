// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbNLnCSojM3vg8aVxGTppuT1W4IDKHzUI",
  authDomain: "demo1-c28a2.firebaseapp.com",
  projectId: "demo1-c28a2",
  storageBucket: "demo1-c28a2.firebasestorage.app",
  messagingSenderId: "432356652636",
  appId: "1:432356652636:web:869140c16fe6fd33f55899",
  measurementId: "G-V1CHYLLVQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app);