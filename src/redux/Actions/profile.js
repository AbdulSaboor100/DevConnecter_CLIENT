import axios from "axios";
import { TYPES } from "./Types";
import { serverUri } from "../../server_details";
import setAuthToken from "../../utils/setAuthToken";

export const getCurrentUserProfile = () => async (dispatch) => {
  try {
    setAuthToken(localStorage.token);
    const res = await axios.get(`${serverUri}/api/profile/me`);
    dispatch({
      type: TYPES.GET_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: TYPES.PROFILE_ERROR,
      payload: {
        message: error.response.data.message,
        status: error.response.status,
      },
    });
  }
};
