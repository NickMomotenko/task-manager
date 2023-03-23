import { Title } from "../../components/Title";
import {
  RecentActivityWrapp,
  RecentActivityPaper,
  RecentActivityHead,
} from "./styled";

export const RecentActivity = () => {
  return (
    <RecentActivityWrapp>
      <RecentActivityPaper>
        <RecentActivityHead>
          <Title text="Recent Activity" />
        </RecentActivityHead>
      </RecentActivityPaper>
    </RecentActivityWrapp>
  );
};
