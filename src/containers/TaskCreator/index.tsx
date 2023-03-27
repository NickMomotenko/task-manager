import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";
import { Avatar } from "../../components/Avatar";

import { AssignBlock } from "../AssignBlock";
import { TaskCreatorHead } from "./TaskCreatorHead";
import { TaskCreatorLabels } from "./TaskCreatorLabels";
import { TaskCreatorTextarea } from "./TaskCreatorTextarea";

import { useOpen } from "../../hooks/useOpen";
import { useTextarea } from "../../hooks/useTextarea";

import {
  TaskCreatorWrapp,
  TaskCreatorBody,
  TaskCreatorOptions,
  TaskCreatorButton,
  TaskCreatorOptionsList,
  TaskCreatorOptionsItem,
  TaskCreatorImplementor,
  TaskCreatorImplementorWorkersWrapp,
  TaskCreatorImplementorText,
  TaskCreatorImplementorTextIn,
  TaskCreatorImplementorContentWrapp,
  TaskCreatorImplementorTextProject,
  TaskCreatorImplementorTextName,
  TaskCreatorImplementorContentWrappUser,
  TaskCreatorImplementorCrossButton,
  TaskCreatorImplementorWrapp,
} from "./styled";

import crossIcon from "../../assets/icons/cross.svg";
import photo_1 from "../../assets/member/2.png";

import { options } from "./data";
import { useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";

export const TaskCreator = () => {
  const workerList = useOpen();
  const descriptionTextarea = useTextarea();

  const assignRef = useRef<HTMLDivElement>(null);

  const handleOpenWorkerList = () => {
    workerList.handleToggleClick();
  };

  useClickOutside(assignRef, () => workerList.setIsOpen(false));

  return (
    <TaskCreatorWrapp>
      <TaskCreatorHead />
      <TaskCreatorBody>
        <TaskCreatorImplementor>
          <TaskCreatorImplementorWrapp>
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
          </TaskCreatorImplementorWrapp>
          {workerList.isOpen && (
            <TaskCreatorImplementorWorkersWrapp ref={assignRef}>
              <AssignBlock />
            </TaskCreatorImplementorWorkersWrapp>
          )}
        </TaskCreatorImplementor>
        <TaskCreatorLabels />
        <TaskCreatorTextarea
          value={descriptionTextarea.value}
          onChange={descriptionTextarea.handleChange}
        />
        <TaskCreatorOptions>
          <TaskCreatorOptionsList>
            {options.map(({ icon, id, alt }) => {
              const personAddIconId = options?.at(-1)?.id;

              return (
                <TaskCreatorOptionsItem
                  key={id}
                  isLastIcon={personAddIconId === id}
                >
                  <Button view="ghost">
                    <Icon src={icon} alt={alt} />
                  </Button>
                </TaskCreatorOptionsItem>
              );
            })}
          </TaskCreatorOptionsList>
        </TaskCreatorOptions>
        <TaskCreatorButton>
          <Button size="b">Create Task</Button>
        </TaskCreatorButton>
      </TaskCreatorBody>
    </TaskCreatorWrapp>
  );
};
