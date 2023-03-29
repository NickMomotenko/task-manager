import { TaskCreatorHeadWrapp } from "./styled";

import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";

import crossIcon from "../../assets/icons/cross.svg";

export const TaskCreatorHead = () => {
  return (
    <TaskCreatorHeadWrapp gorizontalSpace="between">
      <Title text="Create New Task" />
      <Button view="ghost">
        <Icon src={crossIcon} alt="cross icon" />
      </Button>
    </TaskCreatorHeadWrapp>
  );
};
