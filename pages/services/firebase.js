// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD2OvmaldV9C0usX-arLp3MgsyqVlIAiyg",
  authDomain: "chatgpt-8e3ac.firebaseapp.com",
  projectId: "chatgpt-8e3ac",
  storageBucket: "chatgpt-8e3ac.appspot.com",
  messagingSenderId: "673150300049",
  appId: "1:673150300049:web:0441a3367e3bdd4ae8b430",
  measurementId: "G-3F098G903K"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// const provider = new GoogleAuthProvider(); 
export const auth = getAuth();
export const db = getFirestore(app)


