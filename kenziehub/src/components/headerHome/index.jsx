import React from "react";
import { useNavigate } from "react-router-dom";
import ImgKenzieLogo from "../imgLogo";
import { StyledHeader, StyledNav } from "./style";

const HeaderHome = ({ user, setUser }) => {
  const navegate = useNavigate();
  const Logout = () => {
    window.localStorage.clear();
    navegate("/");
    setUser(null);
  };
  console.log(user);
  return (
    <>
      <StyledNav>
        <div>
          <picture>
            <ImgKenzieLogo />
            <button onClick={Logout} type="button">
              Sair
            </button>
          </picture>
        </div>
      </StyledNav>
      <StyledHeader>
        <div>
          <div className="InfoUser">
            <h2>Olá, {user.name}</h2>
            <span>{user.course_module}</span>
          </div>
        </div>
      </StyledHeader>
    </>
  );
};

export default HeaderHome;
