import React from "react";
import { StyledLink } from "./Styled.Link";

import { LinkProps } from "./types";

const LinkComponent = ({
  routed = "#",
  children = "",
  className = "",
  text = "",
}: LinkProps) => {
  return (
    <StyledLink to={`${routed}`} className={className} data-testid="link">
      {text}
      {children}
    </StyledLink>
  );
};

export default LinkComponent;
