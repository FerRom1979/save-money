import React from "react";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import LinkComponent from "../../components/Link/LinkComponent";
import { StyledSingUp } from "./Styled.SingUp";
import Input from "../../components/Input";

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
            <Input type="text" placeholder="name" className="wrapper-field" />
            <Input type="email" placeholder="email" className="wrapper-field" />
            <Input
              type="password"
              placeholder="password"
              className="wrapper-field"
            />
            <Input
              type="password"
              placeholder="confirm password"
              className="wrapper-field"
            />

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
