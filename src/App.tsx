import styled from "styled-components";

import { Alert } from "./components/Alert";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { Input } from "./components/Input";
import { Textarea } from "./components/Textarea";
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
