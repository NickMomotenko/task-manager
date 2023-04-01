import { v4 as uuid } from "uuid";

import ph_1 from "../assets/member/1.png";
import ph_2 from "../assets/member/2.png";
import ph_3 from "../assets/member/3.png";

export type IProject = {
  id: string;
  data: {
    title: string;
    description: string;
    progress: number;
  };
  team: {
    id: string;
    fullname: string;
    avatar: string;
    position: string;
    tasks: never[];
  }[];
  chat: {
    id: string;
    user: {};
    text: string;
    created_at: {
      date: string;
      time: string;
    };
    liked: never[];
  }[];
  files: {}[];
  member: never[];
  history: never[];
};

export const projects = [
  {
    id: 1,
    data: {
      title: "Konsept design homepage",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quas, praesentium repudiandae sed maxime velit. Natus mollitia distinctio atque laudantium debitis odio dolore excepturi! Porro asperiores tempore aut similique maiores?",
      progress: 33,
    },
    team: [
      {
        id: uuid(),
        fullname: "Nickola Briks",
        avatar: ph_1,
        position: "Developer",
        tasks: [],
      },
      {
        id: uuid(),
        fullname: "Nickola Briks 2",
        avatar: ph_2,
        position: "Designer",
        tasks: [],
      },
      {
        id: uuid(),
        fullname: "Nickola Briks 3",
        avatar: ph_3,
        position: "Project Owner",
        tasks: [],
      },
      {
        id: uuid(),
        fullname: "Nickola Briks 3",
        avatar: ph_3,
        position: "Project Owner",
        tasks: [],
      },
    ],
    chat: [
      {
        id: uuid(),
        user: {
          id: uuid(),
          fullname: "Nickola Briks",
          avatar: ph_1,
          position: "Developer",
          tasks: [],
        },
        text: "we are 1 week away from launch! Thank you for every team member for their hard work.",
        created_at: {
          date: "01.04.2023",
          time: "08:45",
        },
        liked: [],
      },
      {
        id: uuid(),
        user: {
          id: uuid(),
          fullname: "Nickola Briks 2",
          avatar: ph_2,
          position: "Designer",
          tasks: [],
        },
        text: "we are 1 week away from launch! Thank you for every team member for their hard work.",
        created_at: {
          date: "01.04.2023",
          time: "08:45",
        },
        liked: [],
      },
    ],
    files: [
      {
        id: uuid(),
        file_name: "Data-structures.xls",
        file_size: "1.4 MB",
        owner: {},
      },
      {
        id: uuid(),
        file_name: "Team-Photos.jpg",
        file_size: "34 MB",
        owner: {},
      },
      {
        id: uuid(),
        file_name: "Contact-data.csv",
        file_size: "1 MB",
        owner: {},
      },
      {
        id: uuid(),
        file_name: "User-journey.pdf",
        file_size: "12 MB",
        owner: {},
      },
    ],
    member: [],
    history: [],
  },
  {
    id: 2,
    data: {
      title: "Konsept design homepage 222",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quas, praesentium repudiandae sed maxime velit. Natus mollitia distinctio atque laudantium debitis odio dolore excepturi! Porro asperiores tempore aut similique maiores?",
      progress: 33,
    },
    team: [
      {
        id: uuid(),
        fullname: "Nickola Briks",
        avatar: ph_1,
        position: "Developer",
        tasks: [],
      },
      {
        id: uuid(),
        fullname: "Nickola Briks 2",
        avatar: ph_2,
        position: "Designer",
        tasks: [],
      },
      {
        id: uuid(),
        fullname: "Nickola Briks 3",
        avatar: ph_3,
        position: "Project Owner",
        tasks: [],
      },
    ],
    chat: [
      {
        id: uuid(),
        user: {},
        text: "we are 1 week away from launch! Thank you for every team member for their hard work.",
        created_at: {
          date: "01.04.2023",
          time: "08:45",
        },
        liked: [],
      },
    ],
    files: [
      {
        id: uuid(),
        file_name: "Data-structures.xls",
        file_size: "1.4 MB",
        owner: {},
      },
      {
        id: uuid(),
        file_name: "Team-Photos.jpg",
        file_size: "34 MB",
        owner: {},
      },
      {
        id: uuid(),
        file_name: "Contact-data.csv",
        file_size: "1 MB",
        owner: {},
      },
      {
        id: uuid(),
        file_name: "User-journey.pdf",
        file_size: "12 MB",
        owner: {},
      },
    ],
    member: [],
    history: [],
  },
];
