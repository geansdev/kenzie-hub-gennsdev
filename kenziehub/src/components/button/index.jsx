import React from "react";
import { StyledButton } from "./style";

const Button = ({ type, button, name, disabled }) => {
  return (
    <StyledButton
      type={type}
      disabled={disabled ? disabled : undefined}
      name={name}
    >
      {button}
    </StyledButton>
  );
};

export default Button;
