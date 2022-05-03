import React from "react";
import { StyledLink } from "./Styled.Link";

import { LinkProps } from "./types";

const LinkComponent = ({
  routed,
  children = null,
  className = "",
  text = "",
}: LinkProps) => {
  return (
    <StyledLink to={routed} className={className}>
      {text}
      {children}
    </StyledLink>
  );
};

export default LinkComponent;
