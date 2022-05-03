import styled from "styled-components";
import toRem from "../../utils/toRem";
import { IStyledTitlesProps } from "./types";

export const StyledTitle = styled.div<IStyledTitlesProps>`
  text-align: center;
  font-size: ${({ fontSize }) => toRem(fontSize as number)};
  color: ${({ color }) => color};
`;
