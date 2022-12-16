import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import ImgKenzieLogo from "../imgLogo";
import { StyledHeader, StyledNav } from "./style";

const HeaderHome = () => {
  const { user, userLogout } = useContext(UserContext);

  return (
    <>
      <StyledNav>
        <div>
          <picture>
            <ImgKenzieLogo />
            <button onClick={() => userLogout()} type="button">
              Sair
            </button>
          </picture>
        </div>
      </StyledNav>
      <StyledHeader>
        <div>
          <div className="InfoUser">
            <h2>Olá, {user?.name}</h2>
            <span>{user?.course_module}</span>
          </div>
        </div>
      </StyledHeader>
    </>
  );
};

export default HeaderHome;
