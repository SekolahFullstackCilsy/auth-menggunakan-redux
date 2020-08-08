import * as actionTypes from "./actionTypes";
/* import axios from "axios";
import { ENDPOINT, access_token } from "../../utils/globals"; */

export const signin = (data) => {
  return {
    type: actionTypes.SIGNIN,
    payload: data,
  };
};

export const signup = (data) => {
  return {
    type: actionTypes.SIGNUP,
    payload: data,
  };
};

export const signout = () => {
  return {
    type: actionTypes.SIGNOUT,
    payload: null,
  };
};

/* export const getListBook = () => {
  const request = axios.get(`${ENDPOINT}/book/findAll`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return (dispatch) => {
    request.then((response) => {
      console.log(response);
      return dispatch({
        type: actionTypes.GET_BOOK,
        payload: response.data,
      });
    });
  };
}; */
