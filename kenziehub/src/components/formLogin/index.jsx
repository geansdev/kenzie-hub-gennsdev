import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../button";
import InputForm from "../input";
import { useForm } from "react-hook-form";
import { LoginSchema } from "./loginShema";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledForm } from "../form";
import { UserContext } from "../../contexts/userContext";

const FormLoginPage = () => {
  const { loading, userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(LoginSchema),
  });

  const submit = async (data) => {
    await userLogin(data);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <div>
        <h2>Login</h2>
      </div>
      <InputForm
        id="email"
        label="Email"
        type="email"
        placeholder="Digite aqui seu email"
        register={register("email")}
        disabled={loading}
        border={errors.email?.message ? "#E83F5B" : "#ffffff"}
      />
      {errors.email?.message && <p>{errors.email.message}</p>}

      <InputForm
        id="password"
        label="Senha"
        type="password"
        placeholder="Digite aqui sua senha"
        register={register("password")}
        disabled={loading}
        border={errors.password?.message ? "#E83F5B" : "#ffffff"}
      />
      {errors.password?.message && <p>{errors.password.message}</p>}

      <Button
        type="submit"
        name="Logar"
        disabled={loading}
        button={loading ? "Entrando..." : "Entrar"}
      />
      <div>
        <span>Ainda não possui uma conta?</span>
        <Link to="/register">Cadastre-se</Link>
      </div>
    </StyledForm>
  );
};

export default FormLoginPage;
