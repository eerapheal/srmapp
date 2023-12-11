// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "srmapp-29538.firebaseapp.com",
  projectId: "srmapp-29538",
  storageBucket: "srmapp-29538.appspot.com",
  messagingSenderId: "467303252710",
  appId: "1:467303252710:web:ac0d8f91205ca88b6ef127",
  measurementId: "G-HE22TJLTX9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);