import { Avatar } from "../../components/Avatar";
import { Row } from "../../components/Layout";

import {
  AssignBlockItemWrapp,
  AssignBlockFullname,
  AssignBlockTasksCounter,
  AssignBlockAvatar,
} from "./styled";

import { IAssignItem } from "./types";

type AssignBlockItemProps = IAssignItem;

export const AssignBlockItem: React.FC<AssignBlockItemProps> = ({
  user,
  tasksCounter,
}) => {
  return (
    <AssignBlockItemWrapp>
      <Row>
        <AssignBlockAvatar>
          <Avatar url={user.avatar} alt={`${user.fullname} avatar`} size={35} />
        </AssignBlockAvatar>
        <AssignBlockFullname>{user.fullname}</AssignBlockFullname>
        <AssignBlockTasksCounter>
          {tasksCounter} {tasksCounter !== 1 ? "tasks" : "task"} on progress
        </AssignBlockTasksCounter>
      </Row>
    </AssignBlockItemWrapp>
  );
};
