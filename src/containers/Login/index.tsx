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

export const Login = () => {
  const email = useInput();
  const password = useInput();

  const navigate = useNavigate();

  const inputs = [email, password];

  useEffect(() => {
    inputs[0].ref.current.focus();
  }, []);

  const handleSubmitLogin = () => {
    if (!email.value) {
      email.ref.current.focus();
      return;
    }

    if (!password.value) {
      password.ref.current.focus();
      return;
    }

    navigate("/auth/mobile");
  };

  const handleCreateNewAccount = () => {
    navigate("/auth/registration");
  };

  const handleForgotPassword = () => {
    navigate("/auth/forgot-password");
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
          />
        </LoginInput>
        <LoginInput>
          <Input
            type="password"
            placeholder="Password"
            value={password.value}
            onChange={password.handleChange}
            ref={password.ref}
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
