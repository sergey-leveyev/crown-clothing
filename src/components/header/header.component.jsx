import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { setCurrentUser } from "../../redux/user/user.actions";

import { ReactComponent as Logo } from "../../assests/crown.svg";

import "./header.styles.scss";

const Header = () => {
  const isAuth = useSelector((state) => {
    const { userReducer } = state;
    return userReducer.isAuth;
  });

  const dispatch = useDispatch();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      dispatch(setCurrentUser(false));
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
          <div className="option" onClick={signUserOut}>
            Log out
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
