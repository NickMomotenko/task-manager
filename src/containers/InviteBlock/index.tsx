import React, { useContext } from "react";

import { Button } from "../../components/Button";
import { Row } from "../../components/Layout";
import { Textarea } from "../../components/Textarea";
import { Icon } from "../../components/Icon";

import { useInput } from "../../hooks/useInput";

import { AlertContext } from "../../context/AlertContext";

import {
  InviteBlockWrapp,
  InviteBody,
  InviteInfo,
  InviteButtons,
  InviteButtonIcon,
} from "./styled";

import inviteIcon from "../../assets/icons/invite-link.svg";

type InviteBlockProps = {
  handleToggleActive?: () => void;
};

export const InviteBlock: React.FC<InviteBlockProps> = ({
  handleToggleActive,
}) => {
  const { value, handleChange, ref } = useInput();
  const { generateAlert } = useContext(AlertContext);

  const handleSendInvites = () => {
    if (!value) {
      ref?.current.focus();
      return;
    }

    const inviteData = value.split(",").map((link) => link.trim());

    generateAlert({
      type: "success",
      title: "Success",
      text: "Invitations have been sent out",
    });

    handleToggleActive();
  };

  const handleCopyInviteLink = () => {
    const basePath = window.location.href;

    const inviteLink = `${basePath}?invite-to-project`;

    navigator.clipboard.writeText(inviteLink);

    generateAlert({
      type: "success",
      title: "Copied",
      text: "Copied to clipboard",
    });
  };

  return (
    <InviteBlockWrapp>
      <InviteBody>
        <Textarea
          value={value}
          ref={ref}
          onChange={handleChange}
          placeholder="name@email.com, name@email.com, ..."
        />
        <InviteInfo>
          Your teammates will get an email that gives them access to your team.
        </InviteInfo>
      </InviteBody>
      <InviteButtons>
        <Row gorizontalSpace="between">
          <Button view="ghost" onClick={handleCopyInviteLink}>
            <InviteButtonIcon>
              <Icon src={inviteIcon} alt="invite icon" />
            </InviteButtonIcon>
            copy link invite
          </Button>
          <Button onClick={handleSendInvites}>Send</Button>
        </Row>
      </InviteButtons>
    </InviteBlockWrapp>
  );
};
