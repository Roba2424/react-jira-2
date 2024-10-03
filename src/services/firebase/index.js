// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuAM-eLtxrdAgcl6yBPKl8q88y6PQyef8",
  authDomain: "jira-2-49b83.firebaseapp.com",
  projectId: "jira-2-49b83",
  storageBucket: "jira-2-49b83.appspot.com",
  messagingSenderId: "177296642887",
  appId: "1:177296642887:web:94ba06c5855dd38d38b262",
  measurementId: "G-V8VJXR4PCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth };
