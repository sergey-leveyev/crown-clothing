import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, provider, db } from "../../firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import { addDoc, collection, getDocs, getDoc } from "firebase/firestore";
import { setCurrentUser } from "../../redux/user/user.actions";

import "./sign-in.styles.scss";

function SignIn() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  };

  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: auth.currentUser.displayName,
      id: auth.currentUser.uid,
      email: auth.currentUser.email,
    });
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      dispatch(setCurrentUser(true));
      createUser();
    });
  };

  //Add a way to check if the user exists

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollectionRef);
  //     console.log(data);
  //   };
  //   getUsers();
  // }, []);

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />

        <div className="buttons">
          <CustomButton type="submit">sing in</CustomButton>
          <CustomButton signInWithGoogle={signInWithGoogle}>
            sing in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
