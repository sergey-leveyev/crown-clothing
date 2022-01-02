import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Firestore } from "firebase/firestore";

const firebaseConfig = {

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
