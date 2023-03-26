import { Icon } from "../../components/Icon";
import { Title } from "../../components/Title";

import {
  RecentActivityWrapp,
  RecentActivityPaper,
  RecentActivityHead,
  RecentActivityBody
} from "./styled";

import arrowIcon from "../../assets/icons/arrow.svg";

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
        <RecentActivityBody></RecentActivityBody>
      </RecentActivityPaper>
    </RecentActivityWrapp>
  );
};
