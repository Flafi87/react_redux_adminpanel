import {
  ADD_USER,
  GET_USERS,
  SET_START_ID,
  UPDATE_USER,
  DELETE_USER,
  DELETE_MODAL_STATE,
  CLEAR_USER,
  MODAL_STATE,
  ERROR,
  CLEAR_ERROR,
} from "../types";
const mainAPI = process.env.API;

const errorDispatch = (dispatch, errorMessage) => {
  dispatch({
    type: ERROR,
    payload: errorMessage,
  });
};

export const getUsers = () => (dispatch, getState) => {
  fetch(mainAPI)
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: CLEAR_ERROR,
      });
      dispatch({
        type: GET_USERS,
        payload: data,
      });
      dispatch({
        type: SET_START_ID,
        payload: data.length,
      });
    })
    .catch(() => errorDispatch(dispatch, "Could not download data :("));
};

export const addUser = () => (dispatch, getState) => {
  const { adminPanel } = getState();
  const { user } = adminPanel;
  fetch(mainAPI, {
    method: "POST",
    body: JSON.stringify({
      ...user,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then(() =>
      dispatch({
        type: ADD_USER,
        payload: user,
      })
    )
    .catch(() => {
      errorDispatch(dispatch, "Could not add user :( ");
    });
};

export const updateUser = () => (dispatch, getState) => {
  const { adminPanel } = getState();
  const { user } = adminPanel;

  fetch(`${mainAPI}${user.id}`, {
    method: "PUT",
    body: JSON.stringify({
      ...user,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.id) {
        dispatch({
          type: UPDATE_USER,
          payload: user,
        });
        dispatch({ type: CLEAR_USER });
        dispatch({ type: MODAL_STATE, payload: { open: false } });
      } else {
        errorDispatch(dispatch, "Could not update user :( ");
      }
    })
    .catch(() => {
      errorDispatch(dispatch, "Could not update user :( ");
    });
};

export const deleteUser = () => (dispatch, getState) => {
  const { adminPanel } = getState();
  const { user } = adminPanel;

  fetch(`${mainAPI}${user.id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: DELETE_USER, payload: user.id });
        dispatch({ type: DELETE_MODAL_STATE, payload: false });
      } else {
        errorDispatch(dispatch, "Error during deleting user");
      }
    })
    .catch(() => {
      errorDispatch(dispatch, "Error during deleting user");
    });
};
