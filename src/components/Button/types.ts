import React from "react";

export type ButtonProps = {
  text?: string;
  type: "submit" | "reset" | "button";
  disabled?: boolean;
  children?: React.ReactElement | null;
  className?: string;
  iconLeft?: boolean;
  onClick?: () => void;
};

export type StyledButtonProps = {
  iconLeft?: boolean;
};
