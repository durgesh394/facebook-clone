
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnk77LxQxmP-me0Jd8bpehZhpBSRD5lfQ",
  authDomain: "facebook-clon-8ebbb.firebaseapp.com",
  projectId: "facebook-clon-8ebbb",
  storageBucket: "facebook-clon-8ebbb.appspot.com",
  messagingSenderId: "532830310081",
  appId: "1:532830310081:web:d18bc1db8a87dc69ba8e40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const google_provider = new GoogleAuthProvider();
export const db = getFirestore(app);