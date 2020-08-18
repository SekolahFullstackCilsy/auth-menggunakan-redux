import * as actionTypes from "../actions/actionTypes";

const initialState = {
  posts: null,
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return initialState;
  }
};

export default posts;
