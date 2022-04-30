import React from "react";
type ButtonProps = {
  text?: string;
};
const Button = ({ text = "Button" }: ButtonProps) => {
  return <div data-testid="button">{text}</div>;
};

export default Button;
