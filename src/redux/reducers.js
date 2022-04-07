import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from "./types";

const initialState = {
  users: [],
  usersRequest: "none",
  errors: []
}

const rootReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        usersRequest: "request",
      }
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: [...action.payload],
        usersRequest: "success",
      }
    case GET_USERS_FAILURE:
      return {
        ...state,
        usersRequest: "failure",
        errors: action.payload
      }
  }
}

export default rootReducer;
