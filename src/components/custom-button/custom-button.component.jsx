import "./custom-button.styles.scss";

import React from "react";

const CustomButton = ({ children, signInWithGoogle, ...otherProps }) => {
  return (
    <button
      className="custom-button"
      onClick={signInWithGoogle ? signInWithGoogle : null}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
