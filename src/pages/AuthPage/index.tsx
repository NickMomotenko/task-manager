import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import { Logo } from "../../components/Logo";
import { MobileApprove } from "../../components/MobileApprove";

import { Login } from "../../containers/Login";
import { Registration } from "../../containers/Registration";

import { AuthSlider } from "./AuthSlider";
import { AuthWrapper } from "./AuthWrapper";

import {
  AuthPageWrapp,
  AuthPageContent,
  AuthPageImage,
  AuthPageLogo,
} from "./styled";

export const AuthPage = () => {
  const [title, setTitle] = useState("");

  const location = useLocation();
  const isLoginPath = location.pathname === "/auth/login";
  const isRegistrationPath = location.pathname === "/auth/registration";
  const isVerifyMobilePath = location.pathname === "/auth/mobile";

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
        <AuthWrapper title={title}>
          {isLoginPath && <Login />}
          {isRegistrationPath && <Registration />}
          {isVerifyMobilePath && <MobileApprove />}
        </AuthWrapper>
      </AuthPageContent>
      <AuthPageImage>
        <AuthSlider />
      </AuthPageImage>
    </AuthPageWrapp>
  );
};
