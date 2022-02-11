import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjIdOBQjgMTqcQpDYUJujQqrT0_cmCEG0",
  authDomain: "crwn-db-59b2d.firebaseapp.com",
  databaseURL: "https://crwn-db-59b2d-default-rtdb.firebaseio.com",
  projectId: "crwn-db-59b2d",
  storageBucket: "crwn-db-59b2d.appspot.com",
  messagingSenderId: "505278827618",
  appId: "1:505278827618:web:9c7ef6b70cf674647d953b",
  measurementId: "G-M7C9G6PTKR",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
