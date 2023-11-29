// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCDJeRs0xnDPVHNBbZiRAnYew6qViUH7E",
  authDomain: "agenda-sam.firebaseapp.com",
  projectId: "agenda-sam",
  storageBucket: "agenda-sam.appspot.com",
  messagingSenderId: "16885571190",
  appId: "1:16885571190:web:f8740404ab6140d70b4957",
  measurementId: "G-PRTRYQ71TW"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;


