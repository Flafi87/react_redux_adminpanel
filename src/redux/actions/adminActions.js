import { GET_USERS } from "../types";

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
    });
};
