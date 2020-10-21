import { axiosWithAuth } from "../utils/axiosWithAuth";

export const GET_DATA = "GET_DATA";
export const DELETE_POST = "DELETE_POST";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const SET_VOTES = "SET_VOTES";
export const ADD_USER = "ADD_USER";

export const getData = (dispatch) => {
  axiosWithAuth()
    .get("/issue")
    .then((res) => {
      console.log(res.data.data);
      dispatch({ type: GET_DATA, payload: res.data.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postIssue = (dispatch, incomData) => {
  axiosWithAuth()
    .post("/issue", incomData)
    .then((res) => {
      console.log(res.data.data);
      dispatch({ type: ADD_POST, payload: res.data.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addUser = (dispatch, incomData) => {
  dispatch({ type: ADD_USER, payload: incomData });
};
