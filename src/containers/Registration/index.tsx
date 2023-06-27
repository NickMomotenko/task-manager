import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { AlertContext } from "../../context/AlertContext";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Separator } from "../../components/Separator";
import { Form } from "../../components/Form";

import {
  RegistrationWrapp,
  RegistrationButton,
  RegistrationInput,
  RegistrationOtherBtn,
} from "./styled";

import { authPathes } from "../../helpers/routes";
import { ERRORS } from "../../helpers/input-errors-text";

const schema = yup
  .object({
    email: yup.string().email().required(),
    name: yup.string().required(),
    secondName: yup.string().required(),
    password: yup.string().required(),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match"),
  })
  .required();

export const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { generateAlert } = useContext(AlertContext);

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    generateAlert({
      type: "success",
      title: "Success",
      text: "Navigate to Login Page",
    });

    setTimeout(() => {
      navigate(authPathes.login);
    }, 500);
  });

  const handleNavigateToLogin = () => {
    navigate(authPathes.login);
  };

  return (
    <RegistrationWrapp>
      <Form onSubmit={onSubmit}>
        <RegistrationInput>
          <Input
            placeholder="Email"
            error={errors.email && ERRORS.EMAIL}
            {...register("email")}
          />
        </RegistrationInput>
        <RegistrationInput>
          <Input
            placeholder="Name"
            error={errors.name && ERRORS.NAME}
            {...register("name")}
          />
        </RegistrationInput>
        <RegistrationInput>
          <Input
            placeholder="Second name"
            error={errors.secondName && ERRORS.SECOND_NAME}
            {...register("secondName")}
          />
        </RegistrationInput>
        <RegistrationInput>
          <Input
            type="password"
            placeholder="Password"
            error={errors.password && ERRORS.PASSWORD}
            {...register("password")}
          />
        </RegistrationInput>
        <RegistrationInput>
          <Input
            type="password"
            placeholder="Repeat password"
            error={errors.repeatPassword && errors?.repeatPassword?.message}
            {...register("repeatPassword")}
          />
        </RegistrationInput>
        <RegistrationButton>
          <Button type="submit">Registration</Button>
        </RegistrationButton>
      </Form>
      <Separator />
      <RegistrationOtherBtn>
        <Button view="ghost" onClick={handleNavigateToLogin}>
          Go to login
        </Button>
      </RegistrationOtherBtn>
    </RegistrationWrapp>
  );
};
