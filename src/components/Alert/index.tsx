import { useEffect, useState } from "react";

import {
  AlertBlock,
  AlertDesc,
  AlertIcon,
  AlertTitle,
  AlertWrapp,
  AlertCrossButton,
} from "./styled";

import crossIcon from "../../assets/icons/cross.svg";

import { Icon } from "../Icon";

import { errorText } from "./data";

type AlertType = "info" | "success" | "wrong" | "warning";

interface AlertProps {
  type: AlertType;
}

export const Alert: React.FC<AlertProps> = ({ type }) => {
  const [isActive, setIsActive] = useState<boolean>(true);

  const alertData = errorText[type];
  const { textColor, wrappColor } = alertData.colorTheme;

  // useEffect(() => {
  //   setTimeout(() => setIsActive(true), 3000);
  // }, []);

  const getColorThemeForItem = (type: string) => {};

  const handleCrossClick = () => setIsActive(false);

  return (
    <AlertWrapp isActive={isActive} style={{ background: wrappColor }}>
      <AlertBlock>
        <AlertIcon>
          <Icon src={alertData?.icon} alt={`${alertData?.type} icon`} />
        </AlertIcon>
      </AlertBlock>
      <AlertBlock>
        <AlertTitle style={{ color: textColor }}>{alertData?.text}</AlertTitle>
        <AlertDesc style={{ color: textColor }}>{alertData?.desc}</AlertDesc>
      </AlertBlock>
      <AlertCrossButton onClick={handleCrossClick}>
        <Icon src={crossIcon} alt={`${alertData?.type} icon`} />
      </AlertCrossButton>
    </AlertWrapp>
  );
};
