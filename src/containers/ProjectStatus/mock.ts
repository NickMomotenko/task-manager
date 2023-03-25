import photo_1 from "../../assets/member/2.png";
import photo_2 from "../../assets/member/1.png";
import photo_3 from "../../assets/member/3.png";
import { status } from "../../helpers/project-status";

export const header = ["Project", "Status", "Owner"];

export const body = [
  {
    id: 1,
    user: {
      fullname: "Tes tse",
      avatar: photo_1,
    },
    data: {
      created_at: "14 Mar",
      status_type: status.onTrack,
      title: "Marketing Page Redesign",
      status_percent: 100,
    },
  },
  {
    id: 2,
    user: {
      fullname: "",
      avatar: photo_2,
    },
    data: {
      created_at: "16 Mar",
      status_type: status.atRisk,
      title: "Pitch Deck",
      status_percent: 70,
    },
  },
  {
    id: 3,
    user: {
      fullname: "",
      avatar: photo_3,
    },
    data: {
      created_at: "17 Mar",
      status_type: status.offTrack,
      title: "New iOS Developement",
      status_percent: 20,
    },
  },
];
