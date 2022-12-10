import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatorio").min(3, "O nome precisa de pelo menos 3 caracteres"),
  email: yup.string().required("O email é obrigatorio").email("O email deve ser: exemplo@email.com"),
  password: yup.string().required("A senha é obrigatorio").min(6, "A senha precisa de pelo menos 6 caracteres"),
  confirm_password: yup.string().required("A senha é obrigatorio").oneOf([yup.ref('password')], "Senha deve ser igual"),
  bio: yup.string().required("A Bio é obrigatorio").min(10, "A Bio precisa de pelo menos 10 caracteres"),
  contact: yup.string().required("O Contato é obrigatorio"),
  course_module: yup.string().required("O modulo é obrigatorio"),
})