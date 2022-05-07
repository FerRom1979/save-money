import React from "react";
import { StyledButton } from "./Styled.Button";
import { ButtonProps } from "./types";

const Button = ({
  text = "",
  type,
  disabled = false,
  className = "",
  children = null,
  iconLeft = false,
  onClick = () => "Click the button",
}: ButtonProps) => {
  return (
    <StyledButton
      data-testid="button"
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
      iconLeft={iconLeft}
    >
      {iconLeft && children}
      {text}
      {!iconLeft && children}
    </StyledButton>
  );
};

export default Button;
