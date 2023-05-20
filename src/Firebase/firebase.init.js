// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKBpotZiLWYraacRekGV2VE-COq8EZUDI",
  authDomain: "toy-market-place-assignment.firebaseapp.com",
  projectId: "toy-market-place-assignment",
  storageBucket: "toy-market-place-assignment.appspot.com",
  messagingSenderId: "1032636788676",
  appId: "1:1032636788676:web:4b97c59c40d265609b7e91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;