import { combineReducers, createStore } from "redux";

import { composeWithDevTools } from "@redux-devtools/extension";

import { projectsReducer } from "./projects/reducer";
import { authReducer } from "./auth/reducer";

const rootReducer = combineReducers({
  projects: projectsReducer,
  auth: authReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
