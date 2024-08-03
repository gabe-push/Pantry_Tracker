// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDWMzfMrXZPy_EKECgsUeLnhPgDL7yu3a4",
  authDomain: "pantry-tracker-b78f6.firebaseapp.com",
  projectId: "pantry-tracker-b78f6",
  storageBucket: "pantry-tracker-b78f6.appspot.com",
  messagingSenderId: "592055299514",
  appId: "1:592055299514:web:b2e8ef75b976726332c183",
  measurementId: "G-0BNV7NK9EY"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);


export {firestore, app};