// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvDRpxG1IoHH9S_iW0ud36AqXVaegTrNk",
  authDomain: "netflixgpt1hp.firebaseapp.com",
  projectId: "netflixgpt1hp",
  storageBucket: "netflixgpt1hp.firebasestorage.app",
  messagingSenderId: "743751075262",
  appId: "1:743751075262:web:844bd60ba4a0e6906b25ef",
  measurementId: "G-0WMGTBMVN5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();