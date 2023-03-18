import styled from "styled-components";

import { Alert } from "./components/Alert";
import { Checkbox } from "./components/Checkbox";
import { Menu } from "./containers/Menu";

const AppWrapp = styled.div``;

export const App = () => {
  return (
    <AppWrapp>
      <Alert type="success" />
      <Menu />
      <Checkbox initialState={true} />
    </AppWrapp>
  );
};
