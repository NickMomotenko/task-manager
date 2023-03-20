import { Avatar } from "../../components/Avatar";
import { Icon } from "../../components/Icon";
import { Tooltip } from "../../components/Tooltip";

import {
  TaskBlockWrapp,
  TaskBlockPaper,
  TaskBlockHeader,
  TaskBlockBody,
  TaskBlockText,
  TaskBlockBottom,
  TaskBlockUser,
  TaskBlockDate,
  TaskBlockDateText,
  TaskBlockButtons,
  TaskBlockOptionButton,
  TaskBlockOptionButtonIcon,
  TaskBlockOptionButtonText,
  TaskBlockLabel,
} from "./TaskBlockStyles";

import optionDotsIcon from "../../assets/icons/option-dots.svg";
import commentIcon from "../../assets/icons/comment.svg";
import photo_1 from "../../assets/member/2.png";

export const TaskBlock = () => {
  return (
    <TaskBlockWrapp>
      <TaskBlockPaper>
        <TaskBlockHeader btw>
          <TaskBlockLabel>Landing Page</TaskBlockLabel>
          <TaskBlockOptionButton>
            <Icon src={optionDotsIcon} alt="option dots icon" />
          </TaskBlockOptionButton>
        </TaskBlockHeader>
        <TaskBlockBody>
          <TaskBlockText>
            Sint ex excepteur proident adipisicing adipisicing occaecat
            pariatur.
          </TaskBlockText>
        </TaskBlockBody>
        <TaskBlockBottom>
          <TaskBlockUser>
            <Avatar url={photo_1} alt="test alt" />
          </TaskBlockUser>
          <TaskBlockDate>
            <Tooltip text="test tff" position="top" />
            <TaskBlockDateText>Jan 5</TaskBlockDateText>
          </TaskBlockDate>
          <TaskBlockButtons>
            <TaskBlockOptionButton>
              <TaskBlockOptionButtonIcon>
                <Icon src={commentIcon} alt="comment icon" />
              </TaskBlockOptionButtonIcon>
              <TaskBlockOptionButtonText>2</TaskBlockOptionButtonText>
            </TaskBlockOptionButton>
            <TaskBlockOptionButton>
              <TaskBlockOptionButtonIcon>
                <Icon src={commentIcon} alt="comment icon" />
              </TaskBlockOptionButtonIcon>
              <TaskBlockOptionButtonText>2</TaskBlockOptionButtonText>
            </TaskBlockOptionButton>
          </TaskBlockButtons>
        </TaskBlockBottom>
      </TaskBlockPaper>
    </TaskBlockWrapp>
  );
};
