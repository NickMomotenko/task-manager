import { useEffect, useState } from "react";

import { LoginWrapp, LoginInput, LoginButton } from "./styled";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useInput } from "../../hooks/useInput";
import { Separator } from "../../components/Separator";
import { useNavigate } from "react-router-dom";

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
      </>
    </LoginWrapp>
  );
};
