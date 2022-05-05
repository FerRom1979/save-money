import styled from "styled-components";

export const StyledLogin = styled.div`
  background: #000;
  height: 100vh;
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
  .wrapper-login {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    line-height: 53px;
    margin-bottom: 40px;
  }
  .wrapper-field {
    width: 352px;
    height: 42px;
    margin-bottom: 20px;
  }
  .btn-login {
    margin-top: 30px;
    margin-bottom: 30px;
    width: 176px;
    height: 42px;
    background: #8b54ff;
    border: 2px solid #9ca6ff;
    box-sizing: border-box;
    border-radius: 20px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 18px;

    color: #ffffff;
  }
`;
