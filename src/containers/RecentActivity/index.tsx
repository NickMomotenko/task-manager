import { Icon } from "../../components/Icon";
import { Title } from "../../components/Title";

import { RecentActivityItem } from "./RecentActivityItem";

import {
  RecentActivityWrapp,
  RecentActivityPaper,
  RecentActivityHead,
  RecentActivityBody,
  RecentActivityList,
} from "./styled";

import arrowIcon from "../../assets/icons/arrow.svg";

import { activityHistory } from "./data";

export const RecentActivity = () => {
  return (
    <RecentActivityWrapp>
      <RecentActivityPaper>
        <RecentActivityHead verticalSpace="between">
          <Title text="Recent Activity" />
          <Icon
            src={arrowIcon}
            alt="arrow icon"
            size={{ h: "15px", w: "15px" }}
          />
        </RecentActivityHead>
        <RecentActivityBody>
          <RecentActivityList>
            {activityHistory.map(({ id, ...rest }) => (
              <RecentActivityItem key={id} {...rest} />
            ))}
          </RecentActivityList>
        </RecentActivityBody>
      </RecentActivityPaper>
    </RecentActivityWrapp>
  );
};
