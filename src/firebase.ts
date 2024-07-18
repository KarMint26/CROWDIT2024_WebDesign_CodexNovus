// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVgfCy7C-VLCsfqXppNCxyJ-QslC5Thtw",
  authDomain: "nocturn-5cf4a.firebaseapp.com",
  projectId: "nocturn-5cf4a",
  storageBucket: "nocturn-5cf4a.appspot.com",
  messagingSenderId: "1013465869398",
  appId: "1:1013465869398:web:d5b87d171ae35dc1175ff7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);