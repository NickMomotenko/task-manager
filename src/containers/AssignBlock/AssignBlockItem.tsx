import { Avatar } from "../../components/Avatar";
import { Row } from "../../components/Layout";

import {
  AssignBlockItemWrapp,
  AssignBlockFullname,
  AssignBlockTasksCounter,
  AssignBlockAvatar,
} from "./styled";

export const AssignBlockItem = (props: any) => {
  const { name, avatar, tasksCounter } = props.value;

  const handleClick = () => {
    props?.onClick(props.value);
  };

  return (
    <AssignBlockItemWrapp onClick={handleClick}>
      <Row>
        <AssignBlockAvatar>
          <Avatar url={avatar} alt={`${name} avatar`} size={35} />
        </AssignBlockAvatar>
        <AssignBlockFullname>{name}</AssignBlockFullname>
        <AssignBlockTasksCounter>
          {tasksCounter} {tasksCounter !== 1 ? "tasks" : "task"} on progress
        </AssignBlockTasksCounter>
      </Row>
    </AssignBlockItemWrapp>
  );
};
