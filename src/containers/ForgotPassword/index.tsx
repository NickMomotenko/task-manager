import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Separator } from "../../components/Separator";

import { useInput } from "../../hooks/useInput";

import {
  ForgotPasswordButton,
  ForgotPasswordInput,
  ForgotPasswordOtherBtn,
  ForgotPasswordWrapp,
} from "./styled";

import { authPathes } from "../../helpers/routes";
import { validateInputs } from "../../pages/AuthPage/helper";

export const ForgotPassword = () => {
  const email = useInput();

  const navigate = useNavigate();

  const inputs = [email];

  useEffect(() => {
    inputs[0].ref.current.focus();
  }, []);

  const handleSubmitLogin = () => {
    const isValid = validateInputs(inputs);

    if (isValid) {
      navigate(authPathes.login);
    }
  };

  const handleNavigateToLogin = () => {
    navigate(authPathes.login);
  };

  return (
    <ForgotPasswordWrapp>
      <>
        <ForgotPasswordInput>
          <Input
            placeholder="Nickname or email"
            value={email.value}
            onChange={email.handleChange}
            ref={email.ref}
          />
        </ForgotPasswordInput>
        <ForgotPasswordButton>
          <Button onClick={handleSubmitLogin}>Help me</Button>
        </ForgotPasswordButton>
        <Separator />
        <ForgotPasswordOtherBtn>
          <Button view="ghost" onClick={handleNavigateToLogin}>
            Go to login
          </Button>
        </ForgotPasswordOtherBtn>
      </>
    </ForgotPasswordWrapp>
  );
};
