import { DELETE_USER, UPDATE_USER } from "../types";

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
