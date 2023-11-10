// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXG9qZ75LobAkwG0K-OBrJiCye2KeEw_I",
  authDomain: "auth-test-23912.firebaseapp.com",
  projectId: "auth-test-23912",
  storageBucket: "auth-test-23912.appspot.com",
  messagingSenderId: "254423400741",
  appId: "1:254423400741:web:81d606aa82274005399acc",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeApp(FIREBASE_APP);
export const FIREBASE_DB = initializeApp(FIREBASE_APP);
