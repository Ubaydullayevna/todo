import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAjspRFJ0i2sFwd1XCRvBGbWAZGFzqKHNo",
  authDomain: "todo-app-firebase-selfmade.firebaseapp.com",
  projectId: "todo-app-firebase-selfmade",
  storageBucket: "todo-app-firebase-selfmade.appspot.com",
  messagingSenderId: "47697727195",
  appId: "1:47697727195:web:e3911d4bae08b3acb246fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const db = getFirestore(app);

export { googleProvider, auth, db };
