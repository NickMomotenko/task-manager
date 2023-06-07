import { useEffect } from "react";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { useInput } from "../../hooks/useInput";

import {
  RegistrationWrapp,
  RegistrationButton,
  RegistrationInput,
} from "./styled";

export const Registration = () => {
  const email = useInput();
  const firstName = useInput();
  const secondName = useInput();
  const password = useInput();
  const repeatPassword = useInput();

  const inputs = [email, firstName, secondName, password, repeatPassword];

  const handleSubmitLogin = () => {
    if (password.value !== repeatPassword.value) return;

    const isValid = inputs.filter((item) => !item.value);

    if (!isValid.length) {
      let data: any = {};

      data["email"] = inputs[0].value;
      data["name"] = inputs[1].value;
      data["secondName"] = inputs[2].value;
      data["password"] = inputs[3].value;

      console.log(data);
    }
  };

  useEffect(() => {
    inputs[0].ref.current.focus();
  }, []);

  return (
    <RegistrationWrapp>
      <RegistrationInput>
        <Input
          placeholder="Email"
          value={email.value}
          onChange={email.handleChange}
          ref={email.ref}
        />
      </RegistrationInput>
      <RegistrationInput>
        <Input
          placeholder="Name"
          value={firstName.value}
          onChange={firstName.handleChange}
          ref={firstName.ref}
        />
      </RegistrationInput>
      <RegistrationInput>
        <Input
          placeholder="Second name"
          value={secondName.value}
          onChange={secondName.handleChange}
          ref={secondName.ref}
        />
      </RegistrationInput>
      <RegistrationInput>
        <Input
          type="password"
          placeholder="Password"
          value={password.value}
          onChange={password.handleChange}
          ref={password.ref}
        />
      </RegistrationInput>
      <RegistrationInput>
        <Input
          type="password"
          placeholder="Repeat password"
          value={repeatPassword.value}
          onChange={repeatPassword.handleChange}
          ref={repeatPassword.ref}
        />
      </RegistrationInput>
      <RegistrationButton>
        <Button onClick={handleSubmitLogin}>Registration</Button>
      </RegistrationButton>
    </RegistrationWrapp>
  );
};
