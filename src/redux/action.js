import axios from "axios";
import USER from "./constant";

export const requestUsers = (data) => async (dispatch) => {
  dispatch({
    type: USER.LOAD,
  });
  try {
    const json = await axios.get("db.json");
    console.log(json);
    dispatch({
      type: USER.LOAD_SUCCESS,
      AllData: json.data,
      isError: false,
    });
  } catch (e) {
    dispatch({
      type: USER.LOAD_SUCCESS,
      AllData: [],
      isError: true,
    });
  }
};
