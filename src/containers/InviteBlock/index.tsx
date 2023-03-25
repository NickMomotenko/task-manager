import React from "react";

import { Button } from "../../components/Button";
import { Row } from "../../components/Layout";
import { Paper } from "../../components/Paper";
import { Textarea } from "../../components/Textarea";
import { Title } from "../../components/Title";

import {
  InviteBlockWrapp,
  InviteHeader,
  InviteBody,
  InviteInfo,
  InviteButtons,
  InviteButton,
  InviteButtonText,
} from "./styled";

import inviteIcon from "../../assets/icons/invite-link.svg";
import { Icon } from "../../components/Icon";
import { useTextarea } from "../../hooks/useTextarea";

export const InviteBlock: React.FC = () => {
  const { value, handleChange } = useTextarea();

  return (
    <InviteBlockWrapp>
      <Paper>
        <InviteHeader>
          <Row>
            <Title text="Invite people to Team" />
          </Row>
        </InviteHeader>
        <InviteBody>
          <Textarea
            value={value}
            onChange={handleChange}
            placeholder="name@email.com, name@email.com, ..."
          />
          <InviteInfo>
            Your teammates will get an email that gives them access to your
            team.
          </InviteInfo>
        </InviteBody>
        <InviteButtons>
          <Row verticalSpace="between">
            <InviteButton>
              <Icon src={inviteIcon} alt="invite icon" />
              <InviteButtonText>copy link invite</InviteButtonText>
            </InviteButton>
            <Button text="Send" />
          </Row>
        </InviteButtons>
      </Paper>
    </InviteBlockWrapp>
  );
};
