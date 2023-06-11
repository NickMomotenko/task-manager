import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Separator } from "../../components/Separator";

import { useInput } from "../../hooks/useInput";

import { validateInputs } from "../../pages/AuthPage/helper";

import { checkLength } from "../../helpers/input-validation";
import { authPathes } from "../../helpers/routes";

import {
  ForgotPasswordButton,
  ForgotPasswordInput,
  ForgotPasswordOtherBtn,
  ForgotPasswordWrapp,
} from "./styled";

export const ForgotPassword = () => {
  const email = useInput("", [() => checkLength(email.value, 1)]);

  const navigate = useNavigate();

  const inputs = [email];

  useEffect(() => {
    inputs[0].ref.current.focus();
  }, []);

  const handleSubmitLogin = () => {
    const isValid = validateInputs(inputs);

    if (isValid) {
      console.log(22);

      // navigate(authPathes.login);
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
            error={email.error}
            onFocus={() => email.setIsBlured(false)}
            onBlur={() => email.setIsBlured(true)}
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
