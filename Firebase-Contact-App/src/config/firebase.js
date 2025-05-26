// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCT1ezjs_pNo5TY4tmGXTi6EK1IzTQxVc",
  authDomain: "vite-contact-68886.firebaseapp.com",
  projectId: "vite-contact-68886",
  storageBucket: "vite-contact-68886.firebasestorage.app",
  messagingSenderId: "975167275514",
  appId: "1:975167275514:web:6bdfbbe3e164fbbf7ee443"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)