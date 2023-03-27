import { Icon } from "../../components/Icon";
import { Row } from "../../components/Layout";

import {
  RecentActivityItemWrapp,
  RecentActivityItemIcon,
  RecentActivityItemContent,
  RecentActivityItemFullname,
  RecentActivityItemText,
  RecentActivityItemDate,
} from "./styled";

import { IType } from "./types";

type RecentActivityItemProps = {
  type: IType | string;
  user: {
    fullname: string;
  };
  text: string;
  date: string;
};

export const RecentActivityItem: React.FC<RecentActivityItemProps> = ({
  type,
  user,
  text,
  date,
}) => {
  const getIconStyles= (type: string) => {
    let url = "";

    return { url };
  };

  return (
    <RecentActivityItemWrapp>
      <Row>
        <RecentActivityItemIcon type={type}>
          {/* <Icon icon={getIconStyles().url} /> */}
        </RecentActivityItemIcon>
        <RecentActivityItemContent>
          <RecentActivityItemFullname>
            {user.fullname}
          </RecentActivityItemFullname>
          <RecentActivityItemText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </RecentActivityItemText>
          <RecentActivityItemDate>{date}</RecentActivityItemDate>
        </RecentActivityItemContent>
      </Row>
    </RecentActivityItemWrapp>
  );
};
