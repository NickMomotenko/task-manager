import { Title } from "../../components/Title";
import { Icon } from "../../components/Icon";

import { MemberItem } from "./MemberItem";
import { Accordion } from "../Accordion";

import {
  MembersBlockWrapp,
  MembersBlockTitle,
  MembersBlockBody,
  MembersBlockList,
  MembersBlockPaper,
} from "./styled";

import arrowIcon from "../../assets/icons/arrow.svg";

import { IMember } from "./types";

type MembersBlockProps = {
  members?: IMember[];
};

export const MembersBlock: React.FC<MembersBlockProps> = ({ members }) => {
  return (
    <MembersBlockWrapp>
      <MembersBlockPaper>
        <Accordion
          header={
            <MembersBlockTitle gorizontalSpace="between">
              <Title text="Project Members" />
              <Icon
                src={arrowIcon}
                alt="arrow icon"
                size={{ h: "15px", w: "15px" }}
              />
            </MembersBlockTitle>
          }
        >
          <MembersBlockBody>
            <MembersBlockList>
              {members?.map((member) => (
                <MemberItem key={member.id} {...member} />
              ))}
            </MembersBlockList>
          </MembersBlockBody>
        </Accordion>
      </MembersBlockPaper>
    </MembersBlockWrapp>
  );
};
