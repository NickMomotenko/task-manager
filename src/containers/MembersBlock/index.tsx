import { Paper } from "../../components/Paper";
import { Title } from "../../components/Title";

import {
  MembersBlockWrapp,
  MembersBlockTitle,
  MembersBlockBody,
  MembersBlockList,
  MembersBlockPaper
} from "./styled";

import { members } from "./mock";
import { MemberItem } from "./MemberItem";

export const MembersBlock = () => {
  return (
    <MembersBlockWrapp>
      <MembersBlockPaper>
        <MembersBlockTitle>
          <Title text="Project Members" />
        </MembersBlockTitle>
        <MembersBlockBody>
          <MembersBlockList>
            {members.map((member) => (
              <MemberItem key={member.id} {...member} />
            ))}
          </MembersBlockList>
        </MembersBlockBody>
      </MembersBlockPaper>
    </MembersBlockWrapp>
  );
};
