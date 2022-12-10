import React from "react";
import { StyledInput } from "./style";

const InputForm = ({
  id,
  label,
  type,
  register,
  placeholder,
  border,
  desabled,
  login,
}) => {
  return (
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        border={border}
        desabled={desabled}
        {...login}
      />
    </StyledInput>
  );
};

export default InputForm;
