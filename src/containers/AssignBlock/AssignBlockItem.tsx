import { Avatar } from "../../components/Avatar";
import { Row } from "../../components/Layout";

import {
  AssignBlockItemWrapp,
  AssignBlockFullname,
  AssignBlockTasksCounter,
} from "./styled";

type AssignBlockItemProps = {
  user: {
    avatar: string;
    fullname: string;
  };
  tasksCounter: number;
};

export const AssignBlockItem: React.FC<AssignBlockItemProps> = ({
  user,
  tasksCounter,
}) => {
  return (
    <AssignBlockItemWrapp>
      <Row>
        <Avatar url={user.avatar} alt={`${user.fullname} avatar`} size={35} />
        <AssignBlockFullname>{user.fullname}</AssignBlockFullname>
        <AssignBlockTasksCounter>
          {tasksCounter} {tasksCounter !== 1 ? "tasks" : "task"} on progress
        </AssignBlockTasksCounter>
      </Row>
    </AssignBlockItemWrapp>
  );
};
