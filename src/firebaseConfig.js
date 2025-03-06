
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBcDZ66TlDwQlw8J7jTfNr7H1LN3NgAYAw",
  authDomain: "razco1212.firebaseapp.com",
  projectId: "razco1212",
  storageBucket: "razco1212.firebasestorage.app",
  messagingSenderId: "300106506154",
  appId: "1:300106506154:web:c675ee6ea4bee26329d5d3",
  measurementId: "G-BTWXFFYGX3"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);
export {auth, googleProvider, db};
