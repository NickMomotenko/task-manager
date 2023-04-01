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
  data?: {
    id: string;
    fullname: string;
    avatar: string;
    position: string;
    tasks: never[];
  }[];
  size?: number;
}

export const MultiAvatar: React.FC<MultiAvatarProps> = ({ size, data }) => {
  return (
    <MultiAvatarWrapp>
      <MultiAvatarList>
        {data?.map(({ id, fullname, avatar }, ind) => (
          <MultiAvatarItem key={id} zIndex={ind + 1}>
            <MultiAvatarLink href="#">
              <Tooltip>{fullname}</Tooltip>
              <Avatar url={avatar} alt={`${fullname} avatar`} size={size} />
            </MultiAvatarLink>
          </MultiAvatarItem>
        ))}
      </MultiAvatarList>
    </MultiAvatarWrapp>
  );
};
