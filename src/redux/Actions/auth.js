import axios from "axios";
import { serverUri } from "../../server_details";
import { TYPES } from "./Types";
import { setAlert } from "./alert";
import setAuthToken from "../../utils/setAuthToken";

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const response = await axios.get(`${serverUri}/api/auth`);
    dispatch({ type: TYPES.USER_LOADED, payload: response.data });
  } catch (error) {
    dispatch({ type: TYPES.AUTH_USER, payload: error.response.data });
  }
};

export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify({
        name,
        email,
        password,
      });
      const response = await axios.post(`${serverUri}/api/users`, body, config);
      dispatch({ type: TYPES.REGISTER_USER, payload: response?.data });
    } catch (error) {
      let errors = error.response?.data?.errors;
      if (errors) {
        errors.map((err) =>
          dispatch(setAlert(err.msg ? err.msg : err.message, "danger", 2000))
        );
        dispatch({ type: TYPES.REGISTER_FAIL });
      }
    }
  };

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify({
        email,
        password,
      });
      const response = await axios.post(
        `${serverUri}/api/auth/login`,
        body,
        config
      );
      dispatch({ type: TYPES.LOGIN_USER, payload: response?.data });
    } catch (error) {
      let errors = error.response?.data?.errors;
      if (errors) {
        errors.map((err) =>
          dispatch(setAlert(err.msg ? err.msg : err.message, "danger", 2000))
        );
        dispatch({ type: TYPES.LOGIN_FAIL });
      }
    }
  };

export const logout = () => (dispatch) => {
  dispatch({ type: TYPES.LOGOUT_SUCCESS });
};
