import ph_3 from "../../assets/member/3.png";

const initialState = {
  authUser: {
    id: 1,
    fullname: "Mia Complin",
    avatar: ph_3,
    position: "Project Owner",
  },
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
  }
  return state;
};
