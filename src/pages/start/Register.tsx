import React from "react";
import Title from "../../components/Title";
import LinkComponent from "../../components/Link/LinkComponent";
import { WrapperRegister } from "./Styled.StartPages";
import Button from "../../components/Button";
import { BsFacebook, BsGoogle } from "react-icons/bs";

function Register() {
  return (
    <WrapperRegister>
      <div>
        <Title
          fontSize={28}
          text={"Sign in to save information"}
          color="#252EFF"
        />
      </div>
      <div>
        <LinkComponent routed="/" text="Sing up" className="btn-contained" />
      </div>
      <div>
        <LinkComponent routed="/login" text="Sing in" className="btn-text" />
      </div>
      <div>
        <Title text="Begin with" fontSize={13} />
        <div className="wrapper-redes">
          <Button type="button" className="btn-icon">
            <BsFacebook size={24} />
          </Button>
          <Button type="button" className="btn-icon">
            <BsGoogle size={24} />
          </Button>
        </div>
      </div>
      <div>
        <Title text="continue any create a count" />
      </div>
    </WrapperRegister>
  );
}

export default Register;
