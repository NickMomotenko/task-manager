import React from "react";

import { Avatar } from "../../components/Avatar";
import { Icon } from "../../components/Icon";

import { AssignBlock } from "../AssignBlock";

import {
  TaskCreatorImplementorWrapp,
  TaskCreatorImplementorText,
  TaskCreatorImplementorContentWrappUser,
  TaskCreatorImplementorTextName,
  TaskCreatorImplementorCrossButton,
  TaskCreatorImplementorTextIn,
  TaskCreatorImplementorContentWrapp,
  TaskCreatorImplementorTextProject,
  TaskCreatorImplementorWorkersWrapp,
  TaskCreatorImplementorBody,
} from "./styled";

import crossIcon from "../../assets/icons/cross.svg";
import photo_1 from "../../assets/member/2.png";

type TaskCreatorImplementorProps = {
  isOpen?: boolean;
  handleOpenWorkerList?: () => void;
  ref?: HTMLDivElement;
};

export const TaskCreatorImplementor = React.forwardRef<
  HTMLDivElement,
  TaskCreatorImplementorProps
>(({ isOpen, handleOpenWorkerList }, ref) => {
  return (
    <>
      <TaskCreatorImplementorWrapp>
        <TaskCreatorImplementorBody>
          <TaskCreatorImplementorText>For</TaskCreatorImplementorText>
          <TaskCreatorImplementorContentWrappUser
            onClick={handleOpenWorkerList}
          >
            <Avatar url={photo_1} alt="avatar icon" size={24} />
            <TaskCreatorImplementorTextName>
              Brooklyn
            </TaskCreatorImplementorTextName>
            <TaskCreatorImplementorCrossButton>
              <Icon src={crossIcon} alt="cross icon" />
            </TaskCreatorImplementorCrossButton>
          </TaskCreatorImplementorContentWrappUser>
          <TaskCreatorImplementorTextIn>In</TaskCreatorImplementorTextIn>
          <TaskCreatorImplementorContentWrapp>
            <TaskCreatorImplementorTextProject>
              Konsept design homepage
            </TaskCreatorImplementorTextProject>
          </TaskCreatorImplementorContentWrapp>
        </TaskCreatorImplementorBody>
        {isOpen && (
          <TaskCreatorImplementorWorkersWrapp ref={ref}>
            <AssignBlock />
          </TaskCreatorImplementorWorkersWrapp>
        )}
      </TaskCreatorImplementorWrapp>
    </>
  );
});
