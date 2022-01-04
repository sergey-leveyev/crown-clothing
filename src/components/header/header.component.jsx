import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

import { ReactComponent as Logo } from "../../assests/crown.svg";

import "./header.styles.scss";

const Header = ({ isAuth, setIsAuth }) => {
  console.log(isAuth);
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
    });
  };

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {!isAuth ? (
          <Link to="/signin">Login</Link>
        ) : (
          <button onClick={signUserOut}>Log out</button>
        )}
      </div>
    </div>
  );
};

export default Header;
