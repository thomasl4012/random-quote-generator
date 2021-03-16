import React from "react";
import "./button.style.css";
const Button = ({ children, colors, ...otherProps }) => {
  return (
    <div
      style={{ backgroundColor: `${colors}` }}
      className="input"
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Button;
