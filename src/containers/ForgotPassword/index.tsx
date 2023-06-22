import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Separator } from "../../components/Separator";
import { Form } from "../../components/Form";

import { authPathes } from "../../helpers/routes";
import { ERRORS } from "../../helpers/input-errors-text";

import {
  ForgotPasswordButton,
  ForgotPasswordInput,
  ForgotPasswordOtherBtn,
  ForgotPasswordWrapp,
} from "./styled";

const schema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required();

export const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    navigate(authPathes.login);
  });

  const handleNavigateToLogin = () => {
    navigate(authPathes.login);
  };

  return (
    <ForgotPasswordWrapp>
      <>
        <Form onSubmit={onSubmit}>
          <ForgotPasswordInput>
            <Input
              placeholder="Email"
              error={errors.email && ERRORS.EMAIL}
              {...register("email")}
            />
          </ForgotPasswordInput>
          <ForgotPasswordButton>
            <Button type="submit">Help me</Button>
          </ForgotPasswordButton>
        </Form>
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
