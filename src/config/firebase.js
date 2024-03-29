import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore  } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGao6xoxw2gfRsg68vK_v3-d3xrcFevAE",
  authDomain: "p2-sro.firebaseapp.com",
  projectId: "p2-sro",
  storageBucket: "p2-sro.appspot.com",
  messagingSenderId: "1011270195908",
  appId: "1:1011270195908:web:a2314fd976b18f99db8791"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const authService = {
  // Function to check if a user is logged in
  checkUserLoggedIn: () => {
    return new Promise((resolve) => {
      getAuth().onAuthStateChanged((user) => {
        resolve(user);
      });
    });
  },
};
