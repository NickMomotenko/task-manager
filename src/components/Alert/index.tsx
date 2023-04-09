import { useState } from "react";

import {
  AlertBlock,
  AlertDesc,
  AlertIcon,
  AlertTitle,
  AlertWrapp,
  AlertCrossButton,
} from "./styled";

import { Icon } from "../Icon";

import { errorText } from "./data";

import { AlertType } from "./types";

import crossIcon from "../../assets/icons/cross.svg";

interface AlertProps {
  id: number;
  type: AlertType;
  title: string;
  text: string;
  handleDelete?: (id: number) => void;
}

export const Alert: React.FC<AlertProps> = ({
  id,
  type = "success",
  title,
  text,
  handleDelete,
}) => {
  const [isActive, setIsActive] = useState<boolean>(true);

  const alertData = errorText[type];
  const { textColor, wrappColor } = alertData.colorTheme;

  return (
    <AlertWrapp isActive={isActive} style={{ background: wrappColor }}>
      <AlertBlock>
        <AlertIcon>
          <Icon src={alertData?.icon} alt={`${alertData?.type} icon`} />
        </AlertIcon>
      </AlertBlock>
      <AlertBlock>
        <AlertTitle style={{ color: textColor }}>{title}</AlertTitle>
        <AlertDesc style={{ color: textColor }}>{text}</AlertDesc>
      </AlertBlock>
      <AlertCrossButton onClick={() => handleDelete(id)}>
        <Icon src={crossIcon} alt={`${alertData?.type} icon`} />
      </AlertCrossButton>
    </AlertWrapp>
  );
};
