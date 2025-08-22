// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb7LgmvkL7BJmleOGnfdpMs_iHgLC9Kfg",
  authDomain: "weddings-a6ec3.firebaseapp.com",
  projectId: "weddings-a6ec3",
  storageBucket: "weddings-a6ec3.firebasestorage.app",
  messagingSenderId: "14825805301",
  appId: "1:14825805301:web:22bc5ff212a9e0d04dbcbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
