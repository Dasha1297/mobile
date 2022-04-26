import "@firebase/firestore";
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaZPHOwvjEFhNH9PsrU-P3exbakCkt9fA",
  authDomain: "labs-23383.firebaseapp.com",
  projectId: "labs-23383",
  storageBucket: "labs-23383.appspot.com",
  messagingSenderId: "502270980228",
  appId: "1:502270980228:web:cd4b6cb00cb3bdbfecd2d1",
  measurementId: "G-MD59B2PPCV",
};

const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();
