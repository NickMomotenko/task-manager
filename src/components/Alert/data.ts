import warningIcon from "../../assets/icons/warning.svg";
import successIcon from "../../assets/icons/success.svg";
import wrongIcon from "../../assets/icons/wrong.svg";
import infoIcon from "../../assets/icons/info.svg";

export const errorText = {
  wrong: {
    id: 1,
    type: "wrong",
    icon: wrongIcon,
    colorTheme: {
      wrappColor: "#e6d0d0",
      textColor: "#EB5757",
    },
  },
  success: {
    id: 2,
    type: "success",
    icon: successIcon,
    colorTheme: {
      wrappColor: "#C8D9CF",
      textColor: "#219653",
    },
  },
  warning: {
    id: 3,
    type: "warning",
    icon: warningIcon,
    colorTheme: {
      wrappColor: "#E7DED6",
      textColor: "#F2994A",
    },
  },
  info: {
    id: 4,
    type: "info",
    icon: infoIcon,
    colorTheme: {
      wrappColor: "#CADAE4",
      textColor: "#2F80ED",
    },
  },
};
