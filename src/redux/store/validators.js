import { FORM_VALIDITY } from "../types";

/** E-mail validation
 * @param  {} value
 * @param  {} dispatch
 */
export const emailValidator = (value, dispatch) => {
  if (value.length === 0) {
    dispatch({
      type: FORM_VALIDITY,
      payload: {
        key: "email",
        value: { error: true, description: "This field cannot be empty" },
      },
    });
  } else {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      dispatch({
        type: FORM_VALIDITY,
        payload: {
          key: "email",
          value: { error: false, description: "" },
        },
      });
    } else {
      dispatch({
        type: FORM_VALIDITY,
        payload: {
          key: "email",
          value: { error: true, description: "Incorrect email address" },
        },
      });
    }
  }
};
/** Name validation
 * @param  {} value
 * @param  {} dispatch
 */
export const nameValidator = (value, dispatch) => {
  if (value.length === 0) {
    dispatch({
      type: FORM_VALIDITY,
      payload: {
        key: "name",
        value: { error: true, description: "This field cannot be empty" },
      },
    });
  } else if (value.length <= 4) {
    dispatch({
      type: FORM_VALIDITY,
      payload: {
        key: "name",
        value: { error: true, description: "Too short name" },
      },
    });
  } else {
    dispatch({
      type: FORM_VALIDITY,
      payload: {
        key: "name",
        value: { error: false, description: "" },
      },
    });
  }
};
