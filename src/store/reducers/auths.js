import * as actionTypes from "../actions/actionTypes";

const initialState = {
  users: [{ name: "admin", username: "admin", password: "admin" }],
  signinResponse: false,
  signedUser: null,
};

const auths = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case actionTypes.SIGNIN:
      const findUser = state.users.find(
        (user) =>
          user.username === action.payload.username &&
          user.password === action.payload.password
      )
        ? true
        : false;

      const filterUser = state.users.filter(
        (user) =>
          user.username === action.payload.username &&
          user.password === action.payload.password
      );

      return {
        ...state,
        signinResponse: findUser,
        signedUser: filterUser,
      };
    case actionTypes.SIGNOUT:
      return {
        ...state,
        signinResponse: false,
      };
    default:
      return initialState;
  }
};

export default auths;
