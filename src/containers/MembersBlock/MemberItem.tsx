import React from "react";
import { Avatar } from "../../components/Avatar";
import { Row } from "../../components/Layout";

import {
  MemberItemWrapp,
  MemberItemAvatar,
  MemberItemCol,
  MemberItemFullname,
  MemberItemPosition,
} from "./styled";

type MemberItemProps = {
  user: {
    id: number;
    fullname: string;
    position: string;
    avatar: string;
  };
};

export const MemberItem: React.FC<MemberItemProps> = ({ user }) => {
  const { fullname, position, avatar } = user;

  return (
    <MemberItemWrapp>
      <Row>
        <MemberItemCol>
          <MemberItemAvatar>
            <Avatar url={avatar} alt={`${fullname} avatar`} />
          </MemberItemAvatar>
        </MemberItemCol>
        <MemberItemCol>
          <MemberItemFullname>{fullname}</MemberItemFullname>
          <MemberItemPosition>{position}</MemberItemPosition>
        </MemberItemCol>
      </Row>
    </MemberItemWrapp>
  );
};
