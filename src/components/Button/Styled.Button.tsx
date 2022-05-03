import styled from "styled-components";
import { StyledButtonProps } from "./types";

export const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin: 0 5px 0 5px;
  }

  &.btn-icon {
    border: none;
    background: transparent;
  }
`;
