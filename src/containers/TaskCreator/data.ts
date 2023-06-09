import { AssignBlockItem } from "../AssignBlock/AssignBlockItem";

import textOutlineIcon from "../../assets/icons/text-outline.svg";
import smileIcon from "../../assets/icons/smile.svg";
import attachIcon from "../../assets/icons/attach.svg";
import calendarIcon from "../../assets/icons/calendar.svg";
import personAddIcon from "../../assets/icons/person-add.svg";

import ph_1 from "../../assets/member/1.png";
import ph_2 from "../../assets/member/2.png";
import ph_3 from "../../assets/member/3.png";

export const options = [
  { id: 1, alt: "text outline icon", icon: textOutlineIcon },
  { id: 2, alt: "smile icon", icon: smileIcon },
  { id: 3, alt: "attach icon", icon: attachIcon },
  { id: 4, alt: "calendar icon", icon: calendarIcon },
  { id: 5, alt: "person icon", icon: personAddIcon },
];

export const labelData = [
  { id: 1, title: "Copyright", icon: "", checked: false },
  { id: 2, title: "Design", icon: "", checked: false },
  { id: 3, title: "UI design", icon: "", checked: false },
  { id: 4, title: "Web development", icon: "", checked: true },
];

export const implementorList = [
  {
    value: {
      name: "Bryklin",
      avatar: ph_1,
      tasksCounter: 5,
    },
    label: "label",
    customOption: AssignBlockItem,
  },
  {
    value: {
      name: "Nickaly",
      avatar: ph_2,
      tasksCounter: 5,
    },
    label: "label",
    customOption: AssignBlockItem,
  },
];
