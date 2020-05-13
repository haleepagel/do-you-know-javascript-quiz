import authReducer from "./authReducer";
import scoreboardReducer from "./scoreboardReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  scoreboard: scoreboardReducer,
});

export default rootReducer;
