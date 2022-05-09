import styled from "styled-components";

export const StyledInput = styled.div`
  input {
    width: 100%;
    height: 100%;
    border: 2px solid #6066ff;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 20px;
    font-size: 20px;

    ::placeholder {
      font-size: 20px;
    }
  }
  &.wrapper-field {
    width: 352px;
    height: 42px;
    margin-bottom: 20px;
  }
`;
