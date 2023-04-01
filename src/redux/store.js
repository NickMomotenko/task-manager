import { combineReducers, createStore } from "redux";

import { projectsReducer } from "./projects/reducer";

const reducer = combineReducers({
  projects: projectsReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
