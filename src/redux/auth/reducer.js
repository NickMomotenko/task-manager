import { SET_LOGIN } from "./types";

import ph_3 from "../../assets/member/3.png";

const initialState = {
  authUser: {
    id: "1",
    fullname: "Mia Complin",
    avatar: ph_3,
    position: "Project Owner",
  },
  isLogin: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN: {
      return { ...state, isLogin: true };
    }
  }
  return state;
};
