import React from "react";
import { StyledTitle } from "./Styled.Title";
import { ITitleProps } from "./types";

const Title = ({
  text,
  fontSize = 16,
  color = "black",
  className = "",
}: ITitleProps) => {
  return (
    <StyledTitle
      fontSize={fontSize}
      color={color}
      data-testid="title"
      className={className}
    >
      {text}
    </StyledTitle>
  );
};

export default Title;
