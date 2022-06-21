import { TYPES } from "../Actions/Types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TYPES.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case TYPES.LOGIN_USER:
    case TYPES.REGISTER_USER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case TYPES.AUTH_USER:
    case TYPES.LOGIN_FAIL:
    case TYPES.REGISTER_FAIL:
    case TYPES.LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
}
