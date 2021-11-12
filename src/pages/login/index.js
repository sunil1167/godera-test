import TextField from "../../components/textfield";
import {
  LoginContainer,
  LoginHeading,
  LoginPageStyle,
  LoginButton,
  LoginButtonLabel,
} from "./style";

export default function Login() {
  return (
    <LoginPageStyle>
      <LoginContainer>
        <LoginHeading>Welcome back!</LoginHeading>
        <TextField type={"text"} label={"Email"} />
        <TextField type={"password"} label={"Password"} />
        <LoginButton>
          <LoginButtonLabel>Sign in</LoginButtonLabel>
        </LoginButton>
      </LoginContainer>
    </LoginPageStyle>
  );
}
