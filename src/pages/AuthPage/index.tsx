import { useContext, useEffect, useState } from "react";

import { Outlet, useLocation } from "react-router-dom";

import { Logo } from "../../components/Logo";

import { AuthSlider } from "./AuthSlider";
import { AuthWrapper } from "./AuthWrapper";

import {
  AuthPageWrapp,
  AuthPageContent,
  AuthPageImage,
  AuthPageLogo,
  AuthPageContainer,
} from "./styled";

import { authPathes } from "../../helpers/routes";

import { AlertContext } from "../../context/AlertContext";

export const AuthPage = () => {
  const [title, setTitle] = useState("");

  const location = useLocation();

  const { generateAlert } = useContext(AlertContext);

  useEffect(() => {
    setTimeout(() => {
      generateAlert({
        type: "info",
        title: "Welcome to the Task Manager",
        text: "You can use absolutely any data in the login form , also in the mobile approve - and after that you will be navigate to the root path",
      });
    }, 1500);
  }, []);

  useEffect(() => {
    generateTitle();
  }, [location]);

  function generateTitle() {
    switch (location.pathname) {
      case `${authPathes.login}`:
        setTitle("Login");
        break;

      case `${authPathes.registration}`:
        setTitle("Registration");
        break;

      case `${authPathes.mobile}`:
        setTitle("Verification by mobile");
        break;

      case `${authPathes.forgot}`:
        setTitle("Forgot password");
        break;

      default:
        setTitle("Title");
        break;
    }
  }

  return (
    <AuthPageWrapp>
      <AuthPageContainer>
        <AuthPageContent>
          <AuthPageLogo>
            <Logo />
          </AuthPageLogo>
          <AuthWrapper title={title}>
            <Outlet />
          </AuthWrapper>
        </AuthPageContent>
        <AuthPageImage>
          <AuthSlider />
        </AuthPageImage>
      </AuthPageContainer>
    </AuthPageWrapp>
  );
};
