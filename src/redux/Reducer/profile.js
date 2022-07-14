import { TYPES } from "../Actions/Types";

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TYPES.GET_PROFILE:
      return {
        ...state,
        loading: false,
        profile: payload,
      };
    case TYPES.PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case TYPES.CLEAR_PROFILE:
      return {
        ...state,
        loading: false,
        profile: null,
        repos: [],
      };

    default:
      return state;
  }
}
