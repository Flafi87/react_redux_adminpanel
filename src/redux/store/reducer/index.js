import { combineReducers } from "redux";

import adminPanelReducer from "./adminPanelReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  adminPanel: adminPanelReducer,
  error: errorReducer,
});

export default rootReducer;
