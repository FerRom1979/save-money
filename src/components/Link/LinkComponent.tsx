import React from "react";
import { StyledLink } from "./Styled.Link";

import { LinkProps } from "./types";

const LinkComponent = ({
  routed = "#",
  children = "",
  className = "",
  text = "",
  color = "",
  fontSize = 16,
}: LinkProps) => {
  return (
    <StyledLink
      to={`${routed}`}
      className={className}
      data-testid="link"
      color={color}
      fontSize={fontSize}
    >
      {text}
      {children}
    </StyledLink>
  );
};

export default LinkComponent;
