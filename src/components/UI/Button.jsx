import React from "react";
import "../UI/Button.css";

const Button = ({ children, onClick }) => {
  return (
    <button className="ui-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;