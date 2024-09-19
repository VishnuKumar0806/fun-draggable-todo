import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCCNH6lBPNp5MZrPxRQNXRMFe6RyBfKHZU",
  authDomain: "todolist-realtime-361c7.firebaseapp.com",
  projectId: "todolist-realtime-361c7",
  storageBucket: "todolist-realtime-361c7.appspot.com",
  messagingSenderId: "517564732119",
  appId: "1:517564732119:web:54cc877321b8f270449692",
  measurementId: "G-FJFWB25ZEV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };