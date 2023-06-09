import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import { Logo } from "../../components/Logo";
import { MobileApprove } from "../../components/MobileApprove";

import { Login } from "../../containers/Login";
import { Registration } from "../../containers/Registration";
import { ForgotPassword } from "../../containers/ForgotPassword";

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

export const AuthPage = () => {
  const [title, setTitle] = useState("");

  const location = useLocation();

  const isLoginPath = location.pathname === authPathes.login;
  const isRegistrationPath = location.pathname === authPathes.registration;
  const isVerifyMobilePath = location.pathname === authPathes.mobile;
  const isForgotPasswordPath = location.pathname === authPathes.forgot;

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
            {isLoginPath && <Login />}
            {isRegistrationPath && <Registration />}
            {isVerifyMobilePath && <MobileApprove />}
            {isForgotPasswordPath && <ForgotPassword />}
          </AuthWrapper>
        </AuthPageContent>
        <AuthPageImage>
          <AuthSlider />
        </AuthPageImage>
      </AuthPageContainer>
    </AuthPageWrapp>
  );
};
