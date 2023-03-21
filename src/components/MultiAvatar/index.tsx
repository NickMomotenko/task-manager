import React from "react";

import { Avatar } from "../Avatar";

import {
  MultiAvatarWrapp,
  MultiAvatarList,
  MultiAvatarItem,
  MultiAvatarLink,
} from "./styled";

import photo_1 from "../../assets/member/1.png";
import photo_2 from "../../assets/member/2.png";
import photo_3 from "../../assets/member/3.png";

interface MultiAvatarProps {
  data?: [];
  size?: number;
}

export const MultiAvatar: React.FC<MultiAvatarProps> = ({ size }) => {
  return (
    <MultiAvatarWrapp>
      <MultiAvatarList>
        {[photo_1, photo_2, photo_3].map((item, ind) => (
          <MultiAvatarItem key={ind} zIndex={ind + 1}>
            <MultiAvatarLink href="#">
              <Avatar url={item} alt="avatar icon" size={size} />
            </MultiAvatarLink>
          </MultiAvatarItem>
        ))}
      </MultiAvatarList>
    </MultiAvatarWrapp>
  );
};
