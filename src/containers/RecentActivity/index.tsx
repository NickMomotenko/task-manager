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
import { withAnimate } from "../../HOC/AnimateHOC";

const RecentActivityTitle = () => {
  return (
    <RecentActivityHead gorizontalSpace="between">
      <Title text="Recent Activity" />
      <Icon src={arrowIcon} alt="arrow icon" size={{ h: "15px", w: "15px" }} />
    </RecentActivityHead>
  );
};

const RecentActivityBodyT = (props: any) => {
  console.log(props);

  return (
    <RecentActivityBody>
      <RecentActivityList>
        {activityHistory.map(({ id, ...rest }) => (
          <RecentActivityItem key={id} {...rest} />
        ))}
      </RecentActivityList>
    </RecentActivityBody>
  );
};

const RecentActivity = (props: any) => {
  return (
    <RecentActivityWrapp>
      <RecentActivityPaper>
        <RecentActivityAnimate />
      </RecentActivityPaper>
    </RecentActivityWrapp>
  );
};

const RecentActivityAnimate = withAnimate(
  RecentActivityTitle,
  RecentActivityBodyT
);

export default RecentActivity;
