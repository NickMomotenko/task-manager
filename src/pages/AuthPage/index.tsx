import { useLocation } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { Separator } from "../../components/Separator";
import { Title } from "../../components/Title";
import { Login } from "../../containers/Login";
import { AuthSlider } from "./AuthSlider";

import {
  AuthPageWrapp,
  AuthPageContent,
  AuthPageImage,
  AuthPageForm,
  AuthPageTitle,
  AuthPageLogo,
} from "./styled";
import { useEffect, useState } from "react";

export const AuthPage = () => {
  const [title, setTitle] = useState("");

  const location = useLocation();

  useEffect(() => {
    generateTitle();
  }, [location]);

  function generateTitle() {
    switch (location.pathname) {
      case "/auth/login":
        setTitle("Login");
        break;

      case "/auth/registration":
        setTitle("Registration");
        break;

      case "/auth/mobile":
        setTitle("Verification by mobile");
        break;

      default:
        setTitle("Title");
        break;
    }
  }

  return (
    <AuthPageWrapp>
      <AuthPageContent>
        <AuthPageLogo>
          <Logo />
        </AuthPageLogo>
        <AuthPageTitle>
          <Title text={title} size={28} />
        </AuthPageTitle>
        <AuthPageForm>
          <Login />
        </AuthPageForm>
        <Separator />
      </AuthPageContent>
      <AuthPageImage>
        <AuthSlider />
      </AuthPageImage>
    </AuthPageWrapp>
  );
};
