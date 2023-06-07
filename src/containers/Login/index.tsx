import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { LoginWrapp, LoginInput, LoginButton } from "./styled";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { MobileApprove } from "../../components/MobileApprove";
import { useInput } from "../../hooks/useInput";

export const Login = () => {
  const [isCorrect, setIsCorrect] = useState(true);

  const email = useInput();
  const password = useInput();

  const navigate = useNavigate();

  const handleSubmitLogin = () => {
    if (!email.value) {
      email.ref.current.focus();
      return;
    }

    if (!password.value) {
      password.ref.current.focus();
      return;
    }

    setIsCorrect(true);
  };

  return (
    <LoginWrapp>
      {isCorrect ? (
        <MobileApprove />
      ) : (
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
        </>
      )}
      <LoginButton>
        <Button onClick={handleSubmitLogin}>Login</Button>
      </LoginButton>
    </LoginWrapp>
  );
};
