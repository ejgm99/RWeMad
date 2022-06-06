// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2KaGl7UGH5WgFZbm5CIFGE0iPIJwRYE8",
  authDomain: "rwemad-96759.firebaseapp.com",
  projectId: "rwemad-96759",
  storageBucket: "rwemad-96759.appspot.com",
  messagingSenderId: "875862761720",
  appId: "1:875862761720:web:9341c983e760ade0779b0d",
  measurementId: "G-TBWEDZMSTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);