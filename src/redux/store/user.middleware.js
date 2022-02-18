import {
  DELETE_USER,
  UPDATE_USER,
  ADD_USER,
  CHANGE_USER_DATA,
  MODAL_STATE,
  SORT_BY_USERNAME,
} from "../types";
import { emailValidator, nameValidator } from "./validators";

export const updateUser =
  ({ getState }) =>
  (next) =>
  ({ type, payload }) => {
    if (type === UPDATE_USER) {
      const { adminPanel } = getState();
      const { users } = adminPanel;
      const updatedUsersList = users.map((user) =>
        user.id === payload.id ? payload : user
      );
      return next({ type, payload: updatedUsersList });
    }
    return next({ type, payload });
  };

export const deleteUser =
  ({ getState }) =>
  (next) =>
  ({ type, payload }) => {
    if (type === DELETE_USER) {
      const { adminPanel } = getState();
      const { users } = adminPanel;
      const reducedUsersList = users.filter((user) => user.id !== payload);
      return next({ type, payload: reducedUsersList });
    }
    return next({ type, payload });
  };

export const addUser =
  ({ getState }) =>
  (next) =>
  ({ type, payload }) => {
    if (type === ADD_USER) {
      const { adminPanel } = getState();
      const { startId } = adminPanel;
      payload.id = startId + 1;
      return next({ type, payload });
    }
    return next({ type, payload });
  };

export const changeUserData =
  ({ getState, dispatch }) =>
  (next) =>
  ({ type, payload }) => {
    if (type === CHANGE_USER_DATA) {
      if (payload.key === "email") {
        emailValidator(payload.value, dispatch);
      } else if (payload.key === "name") {
        nameValidator(payload.value, dispatch);
      }
      return next({ type, payload });
    }
    return next({ type, payload });
  };

export const validateModal =
  ({ getState, dispatch }) =>
  (next) =>
  ({ type, payload }) => {
    if (type === MODAL_STATE) {
      if (payload.open) {
        const { adminPanel } = getState();
        const { email, name } = adminPanel.user;
        emailValidator(email, dispatch);
        nameValidator(name, dispatch);
      }

      return next({ type, payload });
    }
    return next({ type, payload });
  };

export const sortByUserName =
  ({ getState, dispatch }) =>
  (next) =>
  ({ type, payload }) => {
    if (type === SORT_BY_USERNAME) {
      console.log("sort by usernam");
      const { adminPanel } = getState();
      const { users, sorted } = adminPanel;
      if (sorted === "" || sorted === "z-a") {
        const sortedUsers = users.sort((a, b) => {
          let fa = a.username.toLowerCase(),
            fb = b.username.toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });
        console.log(sortedUsers);
        return next({ type, payload: { users: sortedUsers, sorted: "a-z" } });
      } else {
        const sortedUsers = users.sort((a, b) => {
          let fa = a.username.toLowerCase(),
            fb = b.username.toLowerCase();

          if (fa > fb) {
            return -1;
          }
          if (fa < fb) {
            return 1;
          }
          return 0;
        });
        console.log(sortedUsers);
        return next({ type, payload: { users: sortedUsers, sorted: "z-a" } });
      }
    }
    return next({ type, payload });
  };
