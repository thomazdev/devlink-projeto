import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDMcJLlsFy3oiorJiQCfT2Uhn7TQcKjTq8",
  authDomain: "devlinks-30830.firebaseapp.com",
  projectId: "devlinks-30830",
  storageBucket: "devlinks-30830.appspot.com",
  messagingSenderId: "447363490498",
  appId: "1:447363490498:web:69706ec7fc210580f6915b",
  measurementId: "G-GBBZR344QF"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);

export { db, auth };