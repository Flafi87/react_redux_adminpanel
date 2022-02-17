import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
import {
  updateUser,
  deleteUser,
  addUser,
  changeUserData,
  validateModal,
} from "./user.middleware";

const initialState = {};
const middleWare = [
  thunk,
  updateUser,
  deleteUser,
  addUser,
  changeUserData,
  validateModal,
];
const middlewareEnhancer = applyMiddleware(...middleWare);

const composedEnhancer = composeWithDevTools(middlewareEnhancer);

const store = createStore(rootReducer, initialState, composedEnhancer);
export default store;
