import { TYPES } from "./Types";
import { v4 } from "uuid";

const setAlert = (message, alertType, time) => (dispatch) => {
  const id = v4();
  dispatch({ type: TYPES.SET_ALERT, payload: { message, alertType, id } });
  setTimeout(() => {
    dispatch({ type: TYPES.REMOVE_ALERT, payload: id });
  }, time);
};

export { setAlert };
