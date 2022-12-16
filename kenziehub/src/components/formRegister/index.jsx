import { React, useContext, useState } from "react";
import Button from "../button";
import InputForm from "../input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "./registerShema";
import { StyledForm } from "../form";
import { StyledInput } from "../input/style";
import { UserContext } from "../../contexts/userContext";

const FormRegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      bio: "",
      contact: "",
      course_module: "Primeiro Módulo",
    },
    resolver: yupResolver(RegisterSchema),
  });

  const submit = async (data) => {
    await userRegister(data);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <div>
        <h2>Crie sua conta</h2>
        <span>Rapido e grátis, vamos nessa</span>
      </div>
      <InputForm
        id="name"
        label="Nome"
        type="text"
        placeholder="Digite aqui seu nome"
        register={register("name")}
        /* desabled={loading} */
        border={errors.name?.message ? "#E83F5B" : "#ffffff"}
      />
      {errors.name?.message && <p>{errors.name.message}</p>}

      <InputForm
        id="email"
        label="Email"
        type="email"
        placeholder="Digite aqui seu email"
        register={register("email")}
        /* desabled={loading} */
        border={errors.email?.message ? "#E83F5B" : "#ffffff"}
      />
      {errors.email?.message && <p>{errors.email.message}</p>}

      <InputForm
        id="senha"
        label="Senha"
        type="password"
        placeholder="Digite aqui sua senha"
        register={register("password")}
        /* desabled={loading} */
        border={errors.password?.message ? "#E83F5B" : "#ffffff"}
      />
      {errors.password?.message && <p>{errors.password.message}</p>}

      <InputForm
        id="confirmPassword"
        label="Confirmar Senha"
        type="password"
        placeholder="Digite novamente sua senha"
        register={register("confirm_password")}
        /* desabled={loading} */
        border={errors.confirm_password?.message ? "#E83F5B" : "#ffffff"}
      />
      {errors.confirm_password?.message && (
        <p>{errors.confirm_password.message}</p>
      )}
      <InputForm
        id="bio"
        label="Bio"
        type="text"
        placeholder="Fale sobre você"
        register={register("bio")}
        /*  desabled={loading} */
        border={errors.bio?.message ? "#E83F5B" : "#ffffff"}
      />
      {errors.bio?.message && <p>{errors.bio.message}</p>}

      <InputForm
        id="contact"
        label="Contato"
        type="text"
        placeholder="Opção de contato"
        register={register("contact")}
        /* desabled={loading} */
        border={errors.contact?.message ? "#E83F5B" : "#ffffff"}
      />
      {errors.contact?.message && <p>{errors.contact.message}</p>}

      <StyledInput>
        <label htmlFor="moduloValue">Selecionar módulo</label>
        <select id="moduloValue" {...register("course_module")}>
          <option>Primeiro módulo (Introdução ao Frontend)</option>
          <option>Segundo módulo (Frontend Avançado)</option>
          <option>Terceiro módulo (Introdução ao Backend)</option>
          <option>Quarto módulo (Backend Avançado)</option>
        </select>
        {errors.course_module?.message && <p>{errors.course_module.message}</p>}
      </StyledInput>
      <Button
        type="submit"
        /* disabled={loading} */
        button={loading ? "Cadastrando..." : "Cadastrar"}
      />
    </StyledForm>
  );
};

export default FormRegisterPage;
