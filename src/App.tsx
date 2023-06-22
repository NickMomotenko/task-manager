import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Projects } from "./pages/Projects";
import { ProjectScreen } from "./pages/ProjectScreen";
import { AuthPage } from "./pages/AuthPage";
import { Page404 } from "./pages/Page404";

import { AlertContainer } from "./containers/AlertContainer";
import { Registration } from "./containers/Registration";
import { ForgotPassword } from "./containers/ForgotPassword";
import { Login } from "./containers/Login";

import { MobileApprove } from "./components/MobileApprove";
import { Loader } from "./components/Loader";
import { MainContent } from "./components/MainContent";

import { RootState } from "./redux/store";

import { authPathes } from "./helpers/routes";

import { AppRouter, AppWrapp } from "./AppStyles";

const PrivateRoute = () => {
  const { isLogin } = useSelector((state: RootState) => state.auth);

  return isLogin ? (
    <MainContent>
      <Outlet />
    </MainContent>
  ) : (
    <Navigate to={authPathes.login} />
  );
};

export const App = () => {
  return (
    <AppWrapp>
      <AlertContainer />
      <Loader />
      <AppRouter>
        <Routes>
          <Route path="*" element={<Navigate replace to="/404" />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectScreen />} />
          </Route>
          <Route path="auth/" element={<AuthPage />}>
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
            <Route path="mobile" element={<MobileApprove />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>
          <Route path="404" element={<Page404 />} />
        </Routes>
      </AppRouter>
    </AppWrapp>
  );
};
