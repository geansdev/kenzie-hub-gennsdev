import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup.string().required("O email é obrigatorio").email("Digite seu email cadastrado"),
  password: yup.string().required("A senha é obrigatorio").min(6, "Digite sua senha cadastrada")
})