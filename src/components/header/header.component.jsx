import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assests/crown.svg";

import "./header.styles.scss";

const Header = () => {
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
        {localStorage.name ? (
          <div className="option">SIGN OUT</div>
        ) : (
          <Link> SIGN IN</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
