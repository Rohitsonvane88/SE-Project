// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKpXA3hbWeSK3iPoxMYCMn8HIAihTZ5Hw",
  authDomain: "quora-clone-mern-c715f.firebaseapp.com",
  projectId: "quora-clone-mern-c715f",
  storageBucket: "quora-clone-mern-c715f.appspot.com",
  messagingSenderId: "537104112288",
  appId: "1:537104112288:web:50573dd923849cdb0d47c5",
  measurementId: "G-WEPZXK5230"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const provider = new GoogleAuthProvider();

export {auth, provider}