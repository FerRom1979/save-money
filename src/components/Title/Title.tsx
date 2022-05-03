import React from "react";
import { StyledTitle } from "./Styled.Title";
import { ITitleProps } from "./types";

const Title = ({ text, fontSize = 16, color = "black" }: ITitleProps) => {
  return (
    <StyledTitle fontSize={fontSize} color={color}>
      {text}
    </StyledTitle>
  );
};

export default Title;
