import { RecentActivityItem } from "./RecentActivityItem";
import { Accordion } from "../Accordion";

import { RecentActivityBody, RecentActivityList } from "./styled";

import { activityHistory } from "./data";

const RecentActivity = () => {
  return (
    <Accordion title="Recent Activity">
      <RecentActivityBody>
        <RecentActivityList>
          {activityHistory.map(({ id, ...rest }) => (
            <RecentActivityItem key={id} {...rest} />
          ))}
        </RecentActivityList>
      </RecentActivityBody>
    </Accordion>
  );
};

export default RecentActivity;
