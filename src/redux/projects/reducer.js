import { projects } from "../../helpers/projects";

import { ADD_MESSAGE } from "./types";

const initialState = {
  projects: projects,
};

export const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const { messageData, projectId } = action.payload;

      const updatedProjectsData = state.projects.map((project) => {
        if (project.id === projectId) {
          return { ...project, chat: [...project.chat, messageData] };
        }

        return project;
      });

      return { ...state, projects: [...updatedProjectsData] };
  }

  return state;
};
