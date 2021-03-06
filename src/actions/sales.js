import { GET_SALES, SALES_LOADING } from "./types";
import axios from "axios";
import { createHeader } from "./helpers";

const base_url = process.env.REACT_APP_BASE_URL;

export const getSales = uri => {
  return async (dispatch, getState) => {
    dispatch({ type: SALES_LOADING });
    try {
      const { token } = getState().auth;
      const config = createHeader(token);
      const sales = await axios.get(base_url + uri, config);
      dispatch({ type: GET_SALES, payload: sales.data });
    } catch (error) {
      // window.location.href = '/error_500'
    }
  };
};
