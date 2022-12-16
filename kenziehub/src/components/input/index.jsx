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
    <StyledInput border={border}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        desabled={desabled}
        {...login}
      />
    </StyledInput>
  );
};

export default InputForm;
