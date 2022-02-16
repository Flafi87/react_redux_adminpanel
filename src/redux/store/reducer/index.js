import { combineReducers } from "redux";

import adminPanelReducer from "./adminPanelReducer";

const rootReducer = combineReducers({
  adminPanel: adminPanelReducer,
});

export default rootReducer;
