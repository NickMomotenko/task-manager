import { MemberItem } from "./MemberItem";
import { Accordion } from "../Accordion";

import { MembersBlockBody, MembersBlockList } from "./styled";

import { IMember } from "./types";

type MembersBlockProps = {
  members?: IMember[];
};

export const MembersBlock: React.FC<MembersBlockProps> = ({ members }) => {
  return (
    <Accordion title="Project Members">
      <MembersBlockBody>
        <MembersBlockList>
          {members?.map((member) => (
            <MemberItem key={member.id} {...member} />
          ))}
        </MembersBlockList>
      </MembersBlockBody>
    </Accordion>
  );
};
