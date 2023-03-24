import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";
import { Textarea } from "../../components/Textarea";
import { Title } from "../../components/Title";
import { Avatar } from "../../components/Avatar";

import {
  TaskCreatorWrapp,
  TaskCreatorPaper,
  TaskCreatorHead,
  TaskCreatorBody,
  TaskCreatorTextarea,
  TaskCreatorOptions,
  TaskCreatorButton,
  TaskCreatorOptionsButton,
  TaskCreatorOptionsList,
  TaskCreatorOptionsItem,
  TaskCreatorCrossButton,
  TaskCreatorImplementor,
  TaskCreatorImplementorText,
  TaskCreatorImplementorTextIn,
  TaskCreatorImplementorContentWrapp,
  TaskCreatorImplementorTextProject,
  TaskCreatorImplementorTextName,
  TaskCreatorImplementorContentWrappUser,
  TaskCreatorImplementorCrossButton,
} from "./styled";

import crossIcon from "../../assets/icons/cross.svg";
import photo_1 from "../../assets/member/2.png";

import { options } from "./mock";

export const TaskCreator: React.FC<{ initialState?: boolean }> = ({
  initialState = false,
}) => {
  return (
    <TaskCreatorWrapp>
      <TaskCreatorPaper>
        <TaskCreatorHead btw>
          <Title text="Create New Task" />
          <TaskCreatorCrossButton>
            <Icon src={crossIcon} alt="cross icon" />
          </TaskCreatorCrossButton>
        </TaskCreatorHead>
        <TaskCreatorBody>
          <TaskCreatorImplementor>
            <TaskCreatorImplementorText>For</TaskCreatorImplementorText>
            <TaskCreatorImplementorContentWrappUser>
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
                Project
              </TaskCreatorImplementorTextProject>
            </TaskCreatorImplementorContentWrapp>
          </TaskCreatorImplementor>
          <TaskCreatorTextarea>
            <Textarea placeholder="Description..." />
          </TaskCreatorTextarea>
          <TaskCreatorOptions>
            <TaskCreatorOptionsList>
              {options.map(({ icon, id, alt }) => {
                const personAddIconId = options?.at(-1)?.id;

                return (
                  <TaskCreatorOptionsItem
                    key={id}
                    isLastIcon={personAddIconId === id}
                  >
                    <TaskCreatorOptionsButton>
                      <Icon src={icon} alt={alt} />
                    </TaskCreatorOptionsButton>
                  </TaskCreatorOptionsItem>
                );
              })}
            </TaskCreatorOptionsList>
          </TaskCreatorOptions>
          <TaskCreatorButton>
            <Button text="Create Task" />
          </TaskCreatorButton>
        </TaskCreatorBody>
      </TaskCreatorPaper>
    </TaskCreatorWrapp>
  );
};
