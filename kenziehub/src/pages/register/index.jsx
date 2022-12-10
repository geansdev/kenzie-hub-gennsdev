import React from "react";
import { useNavigate } from "react-router-dom";
import FormRegisterPage from "../../components/formRegister";
import ImgKenzieLogo from "../../components/imgLogo";
import { StyledRegister } from "./style";

const RegisterPage = () => {
  const navegate = useNavigate();
  return (
    <StyledRegister>
      <div>
        <picture>
          <ImgKenzieLogo />
          <button type="button" onClick={() => navegate("/")}>
            Voltar
          </button>
        </picture>
        <FormRegisterPage />
      </div>
    </StyledRegister>
  );
};

export default RegisterPage;
