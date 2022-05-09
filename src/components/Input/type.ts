import React from "react";

export interface IInputProps {
  name?: string;
  label?: string;
  type?: "text" | "password" | "email" | "number";
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => typeof event;
  isRequire?: boolean;
}
