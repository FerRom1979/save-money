import React from "react";
import { Content } from "./Styled.Comtainer";
import { ContainerProps } from "./types";

const Container = ({ children }: ContainerProps) => {
  return <Content data-testid="container">{children}</Content>;
};

export default Container;
