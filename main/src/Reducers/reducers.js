import {
  GET_DATA,
  DELETE_POST,
  ADD_POST,
  EDIT_POST,
  SET_VOTES,
  ADD_USER,
} from "../Actions";

const initialState = {
  user: {},
  issue: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        issue: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        issue: action.payload,
      };
    case ADD_USER:
      return {
        ...state,
        user: action.payload,
      };
    case EDIT_POST:
      return {
        ...state,
        issue: action.payload,
      };
    default:
      return state;
  }
};
