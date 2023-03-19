import styled from "styled-components";

import { InviteBlock } from "./containers/InviteBlock";
import { FileAttachment } from "./containers/FileAttachment";
import { MembersBlock } from "./containers/MembersBlock";
import { ProgressLine } from "./containers/ProgressLine";

const AppWrapp = styled.div``;

export const App = () => {
  return (
    <AppWrapp>
      <MembersBlock />
      <InviteBlock />
      <FileAttachment />
      <ProgressLine initialValue={30} />
    </AppWrapp>
  );
};
