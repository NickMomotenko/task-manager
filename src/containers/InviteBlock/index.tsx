import React, { useEffect } from "react";

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
  InviteButtonIcon,
} from "./styled";

import inviteIcon from "../../assets/icons/invite-link.svg";
import { Icon } from "../../components/Icon";
import { useTextarea } from "../../hooks/useTextarea";

export const InviteBlock: React.FC = () => {
  const { value, handleChange, ref, isFocused, getFocus } = useTextarea();

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
            ref={ref}
            onChange={handleChange}
            placeholder="name@email.com, name@email.com, ..."
            isFocused={isFocused}
          />
          <InviteInfo>
            Your teammates will get an email that gives them access to your
            team.
          </InviteInfo>
        </InviteBody>
        <InviteButtons>
          <Row verticalSpace="between">
            <Button view="ghost">
              <InviteButtonIcon>
                <Icon src={inviteIcon} alt="invite icon" />
              </InviteButtonIcon>
              copy link invite
            </Button>
            <Button>Send</Button>
          </Row>
        </InviteButtons>
      </Paper>
    </InviteBlockWrapp>
  );
};
