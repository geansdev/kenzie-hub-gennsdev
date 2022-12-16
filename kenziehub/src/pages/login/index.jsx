import FormLoginPage from "../../components/formLogin";
import ImgKenzieLogo from "../../components/imgLogo";
import { StyledLogin } from "./style";

const LoginPage = () => {
  return (
    <StyledLogin>
      <div>
        <picture>
          <ImgKenzieLogo />
        </picture>
        <FormLoginPage />
      </div>
    </StyledLogin>
  );
};

export default LoginPage;
