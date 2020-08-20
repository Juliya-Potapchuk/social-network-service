import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import sessionReducer from "./sessionReducer";
import postReducer from "./postReducer";
import settingsReducer from "./settingsReducer";

export const rootReducer = combineReducers({
  routing: routerReducer,
  sessionState: sessionReducer,
  postState: postReducer,
  settingsState: settingsReducer,
});
