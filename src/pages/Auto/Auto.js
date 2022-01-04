import "./Auto.scss";

import SignIn from "../../components/sign-in/sign-in.component";

const Auto = ({ setIsAuth }) => {
  return (
    <div>
      <SignIn setIsAuth={setIsAuth} />
    </div>
  );
};

export default Auto;
