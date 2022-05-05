import { Link } from "react-router-dom";
import styled from "styled-components";
import toRem from "../../utils/toRem";
import { StyledLinkProps } from "./types";

export const StyledLink = styled(Link)<StyledLinkProps>`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ fontSize }) => toRem(fontSize || 16)};
  cursor: pointer;
  padding: 4px 8px;

  color: ${({ color }) => color || "inherit"};

  && {
    &.btn-contained {
      width: 176px;
      height: 42px;
      background: #252eff;
      border-radius: 30px;
      color: #fff;
      font-weight: 500;
      line-height: 18px;
    }
  }
`;
