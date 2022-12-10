import { useState } from "react";
import FormLoginPage from "../../components/formLogin";
import ImgKenzieLogo from "../../components/imgLogo";
import { StyledLogin } from "./style";

const LoginPage = ({ setUser }) => {
  return (
    <StyledLogin>
      <div>
        <picture>
          <ImgKenzieLogo />
        </picture>
        <FormLoginPage setUser={setUser} />
      </div>
    </StyledLogin>
  );
};

export default LoginPage;
