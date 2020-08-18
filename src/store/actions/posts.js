import * as actionTypes from "./actionTypes";
import axios from "axios";
import { ENDPOINT } from "../../utils/globals";

export const getListPost = () => {
  const request = axios.get(`${ENDPOINT}/posts`);

  return (dispatch) => {
    request.then((response) => {
      return dispatch({
        type: actionTypes.GET_POSTS,
        payload: response.data,
      });
    });
  };
};
