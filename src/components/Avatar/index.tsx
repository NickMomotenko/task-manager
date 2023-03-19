import React from "react";

import { AvatarWrapp, AvatarBody } from "./styled";

interface AvatarProps {
  url: string;
  alt: string;
  size?: number;
}

export const Avatar: React.FC<AvatarProps> = ({
  url = "",
  alt = "icon info alt",
  size = 42,
}) => {
  return (
    <AvatarWrapp size={size}>
      <AvatarBody src={url} alt={alt} />
    </AvatarWrapp>
  );
};
