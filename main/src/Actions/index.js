import { axiosWithAuth } from "../utils/axoisWithAuth";
import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";

export const GET_DATA = "GET_DATA";
export const DELETE_POST = "DELETE_POST";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const SET_VOTES = "SET_VOTES";

export const getData = (dispatch) => {
  dispatch({ type: GET_DATA });
};
