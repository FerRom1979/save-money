import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  && {
    &.btn-contained {
      width: 176px;
      height: 42px;
      background: #252eff;
      border-radius: 20px;
      color: #fff;
      font-weight: 500;
      line-height: 18px;
    }
  }
`;
