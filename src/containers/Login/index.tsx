import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  LoginWrapp,
  LoginInput,
  LoginButton,
  LoginOtherBtns,
  LoginCreateAccountBtn,
} from "./styled";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Separator } from "../../components/Separator";

import { useInput } from "../../hooks/useInput";

import { authPathes } from "../../helpers/routes";
import { validateInputs } from "../../pages/AuthPage/helper";

export const Login = () => {
  const email = useInput();
  const password = useInput();

  const navigate = useNavigate();

  const inputs = [email, password];

  useEffect(() => {
    inputs[0].ref.current.focus();
  }, []);

  const handleSubmitLogin = () => {
    const isValid = validateInputs(inputs);

    if (isValid) {
      navigate(authPathes.mobile);
    }
  };

  const handleCreateNewAccount = () => {
    navigate(authPathes.registration);
  };

  const handleForgotPassword = () => {
    navigate(authPathes.forgot);
  };

  return (
    <LoginWrapp>
      <>
        <LoginInput>
          <Input
            placeholder="Nickname or email"
            value={email.value}
            onChange={email.handleChange}
            ref={email.ref}
            error={email.error}
            onFocus={() => email.setIsBlured(false)}
            onBlur={() => email.setIsBlured(true)}
          />
        </LoginInput>
        <LoginInput>
          <Input
            type="password"
            placeholder="Password"
            value={password.value}
            onChange={password.handleChange}
            ref={password.ref}
            error={password.error}
            onFocus={() => password.setIsBlured(false)}
            onBlur={() => password.setIsBlured(true)}
          />
        </LoginInput>
        <LoginButton>
          <Button onClick={handleSubmitLogin}>Login</Button>
        </LoginButton>
        <Separator />
        <LoginOtherBtns>
          <LoginCreateAccountBtn>
            <Button view="ghost" onClick={handleCreateNewAccount}>
              Create a new account?
            </Button>
          </LoginCreateAccountBtn>
          <Button view="ghost" onClick={handleForgotPassword}>
            Forgot password
          </Button>
        </LoginOtherBtns>
      </>
    </LoginWrapp>
  );
};
