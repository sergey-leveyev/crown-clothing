import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth } from "../../firebase/firebase";

const SignUpComponent = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

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

  return (
    <div className="sign-up">
      <h2>I do not have account</h2>
      <span>Sign up with your email</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          handleChange={handleChange}
          value={displayName}
          label="Display name"
          required
        />

        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
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

        <FormInput
          name="confirmPassword"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Confirm password"
          required
        />
        <CustomButton type="submit">sing in</CustomButton>
      </form>
    </div>
  );
};

export default SignUpComponent;
