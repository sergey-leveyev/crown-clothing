import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjIdOBQjgMTqcQpDYUJujQqrT0_cmCEG0",
  authDomain: "crwn-db-59b2d.firebaseapp.com",
  projectId: "crwn-db-59b2d",
  storageBucket: "crwn-db-59b2d.appspot.com",
  messagingSenderId: "505278827618",
  appId: "1:505278827618:web:9c7ef6b70cf674647d953b",
  measurementId: "G-M7C9G6PTKR",
};

export const createUserProfileDocument = async (userAuth, addittionalData) => {
  if (!userAuth) return;
  console.log(Firestore.doc("users/45555421545"));
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;

      localStorage.setItem("name", name);
    })
    .catch((error) => {
      console.log(error);
    });
};
