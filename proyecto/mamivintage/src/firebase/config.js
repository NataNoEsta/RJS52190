// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9Jge253GHlxeE_fI3cb-OUaFY-cJGrqo",
  authDomain: "durable-jet-371809.firebaseapp.com",
  projectId: "durable-jet-371809",
  storageBucket: "durable-jet-371809.appspot.com",
  messagingSenderId: "473200625637",
  appId: "1:473200625637:web:f757820d11fca7c0e0110c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) // crea referencia a la d de firestore
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()