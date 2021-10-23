import { combineReducers } from "redux";
import shopReducer from "./shopReducer";

const rootReducer = combineReducers({
  shopping: shopReducer
});

export type State = ReturnType<typeof rootReducer>;

export default rootReducer;