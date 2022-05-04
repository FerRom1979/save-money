import styled from "styled-components";
import { StyledButtonProps } from "./types";

export const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 20px;
  border-radius: 20px;
  background: blue;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  span {
    margin: 0 5px 0 5px;
  }

  &.btn-icon {
    border: none;
    background: transparent;
  }
  &.contained {
  }
  &.outlined {
    background: #fff;
    color: #000;
  }
  &.text {
    border: none;
    background-color: transparent;
    color: #000;
  }
`;
