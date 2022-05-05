import React from "react";

export type LinkProps = {
  routed?: string;
  className?: string;
  text?: string;
  children?: React.ReactElement | string;
  color?: string;
  fontSize?: number;
};

export type StyledLinkProps = {
  fontSize?: number;
};
