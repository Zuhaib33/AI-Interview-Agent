
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-interview-agent-83e4e.firebaseapp.com",
  projectId: "ai-interview-agent-83e4e",
  storageBucket: "ai-interview-agent-83e4e.firebasestorage.app",
  messagingSenderId: "213269958711",
  appId: "1:213269958711:web:de02770064294f46feafb2"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };