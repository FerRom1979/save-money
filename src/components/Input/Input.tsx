import React from "react";
import { IInputProps } from "./type";
import { StyledInput } from "./Styled.Input";

const Input = ({
  name = "",
  label = "",
  type = "text",
  className = "",
  placeholder = "",
  disabled = false,
  onChange = undefined,
  isRequire = false,
}: IInputProps) => {
  return (
    <StyledInput className={className}>
      <label htmlFor={name}>{label}</label>
      <input
        data-testid="input"
        type={type}
        name={name}
        id={name}
        placeholder={`${placeholder}${isRequire ? "*" : ""}`}
        disabled={disabled}
        onChange={onChange}
      />
    </StyledInput>
  );
};

export default Input;
