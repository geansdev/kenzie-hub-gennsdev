import React from "react";
import { StyledButton } from "./style";

const Button = ({ type, button, name }) => {
  return (
    <StyledButton type={type} name={name}>
      {button}
    </StyledButton>
  );
};

export default Button;
