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
import { useInput } from "../../hooks/useInput";

export const InviteBlock: React.FC = () => {
  const inviteTextarea = useInput({ initialValue: "fasf", name: "test" });

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
            initialValue=""
            placeholder="name@email.com, name@email.com, ..."
          />
          <InviteInfo>
            Your teammates will get an email that gives them access to your
            team.
          </InviteInfo>
        </InviteBody>
        <InviteButtons>
          <Row btw>
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
