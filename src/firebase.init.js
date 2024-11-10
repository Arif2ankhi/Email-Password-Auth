// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6LPwVgBMtonddmdlK3sYX_pIqxYqPmgo",
  authDomain: "email-password-auth-4161e.firebaseapp.com",
  projectId: "email-password-auth-4161e",
  storageBucket: "email-password-auth-4161e.firebasestorage.app",
  messagingSenderId: "491347060632",
  appId: "1:491347060632:web:f48ca81877e57314e6aded"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);
 export const auth = getAuth(app);