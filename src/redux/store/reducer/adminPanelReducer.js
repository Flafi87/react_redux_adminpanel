import {
  GET_USERS,
  GET_ONE_USER,
  UPDATE_USER,
  ADD_USER,
  DELETE_USER,
  MODAL_STATE,
  DELETE_MODAL_STATE,
  CHANGE_USER_DATA,
  SET_START_ID,
  FORM_VALIDITY,
  CLEAR_USER,
  CHANGE_CITY,
} from "../../types";

const initialState = {
  users: [],
  loading: true,
  user: {
    id: "",
    name: "",
    username: "",
    email: "",
    address: {
      city: "",
    },
  },
  modal: {
    open: false,
    title: "",
  },
  deleteModal: false,
  validity: {
    email: { error: false, description: "" },
    name: { error: false, description: "" },
  },
  startId: 1,
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
        user: initialState.user,
        loading: false,
        modal: {
          ...state.modal,
          open: false,
        },
      };
    case ADD_USER:
      return {
        ...state,
        users: [action.payload, ...state.users],
        user: initialState.user,
        loading: false,
        modal: {
          ...state.modal,
          open: false,
        },
        startId: state.startId + 1,
      };
    case DELETE_USER:
      return {
        ...state,
        users: action.payload,
        loading: false,
        user: initialState.user,
      };
    case MODAL_STATE:
      return {
        ...state,
        modal: {
          ...state.modal,
          open: action.payload.open,
          title: action.payload.title,
        },
        loading: false,
      };
    case DELETE_MODAL_STATE:
      return {
        ...state,
        deleteModal: action.payload,
      };
    case SET_START_ID:
      return {
        ...state,
        startId: action.payload,
      };
    case CHANGE_USER_DATA:
      return {
        ...state,
        user: {
          ...state.user,
          [action.payload.key]: action.payload.value,
        },
      };

    case CHANGE_CITY:
      return {
        ...state,
        user: {
          ...state.user,
          address: {
            ...state.user.address,
            city: action.payload,
          },
        },
      };
    case FORM_VALIDITY:
      return {
        ...state,
        validity: {
          ...state.validity,
          [action.payload.key]: action.payload.value,
        },
      };
    case CLEAR_USER:
      return {
        ...state,
        user: initialState.user,
      };
    default:
      return state;
  }
};
