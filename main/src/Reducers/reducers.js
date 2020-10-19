import {
  GET_DATA,
  DELETE_POST,
  ADD_POST,
  EDIT_POST,
  SET_VOTES,
} from "../Actions";

const initialState = [
  {
    name: "Pothole",
    desc: "Pothole please fix",
    points: 22,
    id: 0,
  },
  {
    name: "Park is dirty",
    desc: "Please clean the park",
    points: 12,
    id: 1,
  },
  {
    name: "Broken mail boxes",
    desc: "Stop people from breaking boxes, and fix the ones broken",
    points: 5,
    id: 2,
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return initialState;
    default:
      return state;
  }
};
