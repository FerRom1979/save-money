import React from "react";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Title from "../../components/Title";
import { StyledLogin } from "./Styled.Login";
import LinkComponent from "../../components/Link/LinkComponent";
import Input from "../../components/Input";

const Login = () => {
  return (
    <StyledLogin>
      <Container>
        <>
          <form className="wrapper-login">
            <Title text="Login" color="#FFF" fontSize={44} className="title" />

            <Input type="text" placeholder="email" className="wrapper-field" />
            <Input
              type="password"
              placeholder="password"
              className="wrapper-field"
            />
            <div>
              <Button text="login" type="submit" className="btn-login" />
            </div>
            <div>
              <LinkComponent
                routed="/register"
                text="Do not you have an account yet?"
                color="#fff"
                fontSize={14}
              />
            </div>
          </form>
        </>
      </Container>
    </StyledLogin>
  );
};

export default Login;
