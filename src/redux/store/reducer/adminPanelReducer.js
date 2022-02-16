import { GET_USERS, GET_ONE_USER, UPDATE_USER, DELETE_USER } from "../../types";

const initialState = {
  users: [],
  loading: false,
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_ONE_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case DELETE_USER:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
