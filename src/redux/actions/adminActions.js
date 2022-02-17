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
} from "../types";

export const getUsers = () => (dispatch, getState) => {
  fetch(
    "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"
  )
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: GET_USERS,
        payload: data,
      });
      dispatch({
        type: SET_START_ID,
        payload: data.length,
      });
    })
    .catch((err) =>
      dispatch({ type: ERROR, payload: "Could not download data :(" })
    );
};

export const addUser = () => (dispatch, getState) => {
  const { adminPanel } = getState();
  const { user } = adminPanel;
  fetch(
    "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data",
    {
      method: "POST",
      body: JSON.stringify({
        ...user,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  )
    .then((response) => response.json())
    .then((json) =>
      dispatch({
        type: ADD_USER,
        payload: user,
      })
    )
    .catch((err) => {
      dispatch({
        type: ERROR,
        payload: "Could not add the user. Network error",
      });
    });
};

export const updateUser = () => (dispatch, getState) => {
  const { adminPanel } = getState();
  const { user } = adminPanel;

  fetch(
    `https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${user.id}`,
    {
      method: "PUT",
      body: JSON.stringify({
        ...user,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  )
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
        dispatch({
          type: ERROR,
          payload:
            "Error during updating user, it is not existing in the database",
        });
      }
    })
    .catch((err) => {
      dispatch({ type: ERROR, payload: "Error during updating user" });
    });
};

export const deleteUser = () => (dispatch, getState) => {
  const { adminPanel } = getState();
  const { user } = adminPanel;

  fetch(`https://jsonplaceholder.typicode.com/posts/${user.id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: DELETE_USER, payload: user.id });
        dispatch({ type: DELETE_MODAL_STATE, payload: false });
      } else {
        dispatch({ type: ERROR, payload: "Error during deleting user" });
      }
    })
    .catch((err) => {
      dispatch({ type: ERROR, payload: "Error during deleting user" });
    });
};
