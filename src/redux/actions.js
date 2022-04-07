import * as axios from "axios";

import {
  USERS_API_URL,
  LOGIN_API_URL
} from "../api";

import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from "./types";

const getUsersRequest = () => ({
  type: GET_USERS_REQUEST
});

const getUsersSuccess = (data) => ({
  type: GET_USERS_SUCCESS,
  payload: data
});

const getUsersFailure = (error) => ({
  type: GET_USERS_FAILURE,
  payload: error
});


export const getUsers = () => async (dispatch) => {
  console.log('2')
  dispatch(getUsersRequest());

  try {
    const response = await axios.get(USERS_API_URL);
    dispatch(getUsersSuccess(response.data.data));
  } catch(error) {
    dispatch(getUsersFailure(error));
  }
}
