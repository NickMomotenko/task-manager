import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
import { Form } from "../../components/Form";

import { authPathes, routes } from "../../helpers/routes";
import { ERRORS } from "../../helpers/input-errors-text";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = handleSubmit(() => {
    navigate(authPathes.mobile);
  });

  const handleCreateNewAccount = () => {
    navigate(authPathes.registration);
  };

  const handleForgotPassword = () => {
    navigate(authPathes.forgot);
  };

  return (
    <LoginWrapp>
      <>
        <Form onSubmit={onSubmit}>
          <LoginInput>
            <Input
              placeholder="Email"
              type="email"
              error={errors.email && ERRORS.EMAIL}
              {...register("email")}
            />
          </LoginInput>
          <LoginInput>
            <Input
              placeholder="Password"
              type="password"
              error={errors.password && ERRORS.PASSWORD}
              {...register("password")}
            />
          </LoginInput>
          <LoginButton>
            <Button type="submit">Login</Button>
          </LoginButton>
        </Form>
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
