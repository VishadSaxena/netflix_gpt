// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEKqlRgydhPlwawe58efJSfKNElpKB6sw",
  authDomain: "netflixgpt-29000.firebaseapp.com",
  projectId: "netflixgpt-29000",
  storageBucket: "netflixgpt-29000.appspot.com",
  messagingSenderId: "946447020476",
  appId: "1:946447020476:web:114544b38ae4a52621fbb9",
  measurementId: "G-MK3PKLSXNB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();