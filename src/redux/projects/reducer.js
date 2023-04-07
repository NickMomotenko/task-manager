import { projects } from "../../helpers/projects";

import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  SET_LIKE,
  SET_ACTIVE_PROJECT,
} from "./types";

const initialState = {
  projects: projects,
  activeProject: null,
};

export const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const messageData = action.payload;

      const updatedProject = {
        ...state.activeProject,
        chat: [...state.activeProject.chat, messageData],
      };

      return { ...state, activeProject: { ...updatedProject } };
    }

    case DELETE_MESSAGE: {
      const messageId = action.payload;

      const updatedProject = {
        ...state.activeProject,
        chat: [
          ...state.activeProject.chat.filter((item) => item.id !== messageId),
        ],
      };

      return { ...state, activeProject: { ...updatedProject } };
    }

    case SET_LIKE: {
      const { messageId, user } = action.payload;

      const updatedProject = {
        ...state.activeProject,
        chat: [
          ...state.activeProject.chat.map((item) => {
            if (item.id === messageId) {
              const searchableUser = item.liked.find(
                (likeObj) => likeObj.id === user.id
              );

              if (searchableUser) {
                return {
                  ...item,
                  liked: [
                    ...item.liked.filter((likeObj) => likeObj.id !== user.id),
                  ],
                };
              } else {
                return {
                  ...item,
                  liked: [...item.liked, user],
                };
              }
            }

            return item;
          }),
        ],
      };

      return { ...state, activeProject: { ...updatedProject } };
    }

    case SET_ACTIVE_PROJECT: {
      const project = action.payload;

      return { ...state, activeProject: project };
    }
  }

  return state;
};
