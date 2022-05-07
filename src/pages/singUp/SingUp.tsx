import React from "react";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import LinkComponent from "../../components/Link/LinkComponent";
import { StyledSingUp } from "./Styled.SingUp";

const SingUp = () => {
  return (
    <StyledSingUp>
      <Container>
        <>
          <form className="wrapper-login">
            <Title
              text="Register"
              color="#FFF"
              fontSize={44}
              className="title"
            />
            <div className="wrapper-field">
              <input type="text" placeholder="name" />
            </div>
            <div className="wrapper-field">
              <input type="text" placeholder="email" />
            </div>
            <div className="wrapper-field">
              <input type="password" placeholder="password" />
            </div>
            <div className="wrapper-field">
              <input type="password" placeholder="confirm password" />
            </div>

            <Button text="Register" type="submit" className="btn-login" />

            <LinkComponent
              routed="/login"
              text="Have account? Sign In"
              color="#fff"
              fontSize={14}
              className="btn-contained"
            />
          </form>
        </>
      </Container>
    </StyledSingUp>
  );
};

export default SingUp;
