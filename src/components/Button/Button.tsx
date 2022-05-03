import React from "react";
import { ButtonProps } from "./types";

const Button = ({ text = "Button", icon = null }: ButtonProps) => {
  if (icon) {
    return <div data-testid="button-icon">{icon}</div>;
  }
  return <div data-testid="button">{text}</div>;
};

export default Button;
