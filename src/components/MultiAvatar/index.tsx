import React from "react";

import { Avatar } from "../Avatar";

import {
  MultiAvatarWrapp,
  MultiAvatarList,
  MultiAvatarItem,
  MultiAvatarLink,
} from "./styled";

import { Tooltip } from "../Tooltip";

import { multiData } from "./data";

interface MultiAvatarProps {
  data?: [];
  size?: number;
}

export const MultiAvatar: React.FC<MultiAvatarProps> = ({ size }) => {
  return (
    <MultiAvatarWrapp>
      <MultiAvatarList>
        {multiData.map(({ user, id }, ind) => (
          <MultiAvatarItem key={ind} zIndex={ind + 1}>
            <MultiAvatarLink href="#">
              <Tooltip>{user.fullname}</Tooltip>
              <Avatar
                url={user.avatar}
                alt={`${user.fullname} avatar`}
                size={size}
              />
            </MultiAvatarLink>
          </MultiAvatarItem>
        ))}
      </MultiAvatarList>
    </MultiAvatarWrapp>
  );
};
