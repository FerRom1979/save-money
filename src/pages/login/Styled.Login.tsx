import styled from "styled-components";

export const StyledLogin = styled.div`
  background: #000;
  height: 100vh;

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
