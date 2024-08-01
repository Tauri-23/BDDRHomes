// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_RcUQbZYjfEhm2IcWG2Ymu0xG3QF3eIU",
  authDomain: "bddrhomes.firebaseapp.com",
  projectId: "bddrhomes",
  storageBucket: "bddrhomes.appspot.com",
  messagingSenderId: "217011115270",
  appId: "1:217011115270:web:4d1598120967e5b4c2ba87",
  measurementId: "G-GGVBEWGWVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export {auth, app, firestore};