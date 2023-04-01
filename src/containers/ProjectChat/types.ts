export type IChat = {
  id: string;
  user: {
    id: string;
    fullname: string;
    avatar: string;
    position: string;
    tasks: never[];
  };
  text: string;
  created_at: {
    date: string;
    time: string;
  };
  liked: never[];
};
