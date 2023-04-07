import React from "react";

import { Avatar } from "../Avatar";
import { Tooltip } from "../Tooltip";

import {
  MultiAvatarWrapp,
  MultiAvatarList,
  MultiAvatarItem,
  MultiAvatarLink,
} from "./styled";

import { TData } from "./types";

type MultiAvatarProps = {
  data?: TData[];
  size?: number;
  showTooltip?: boolean;
};

export const MultiAvatar: React.FC<MultiAvatarProps> = ({
  data,
  size,
  showTooltip = true,
}) => {
  const renderData = data?.slice(0, 3);

  return (
    <MultiAvatarWrapp>
      <MultiAvatarList>
        {renderData?.map(({ id, fullname, avatar }, ind) => (
          <MultiAvatarItem key={id} zIndex={ind + 1}>
            <MultiAvatarLink href="#">
              {showTooltip && <Tooltip>{fullname}</Tooltip>}
              <Avatar url={avatar} alt={`${fullname} avatar`} size={size} />
            </MultiAvatarLink>
          </MultiAvatarItem>
        ))}
      </MultiAvatarList>
    </MultiAvatarWrapp>
  );
};
