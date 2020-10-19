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
    description: "Pothole please fix",
    points: 22,
    id: 0,
    location: "or",
  },
  {
    name: "Park is dirty",
    description: "Please clean the park",
    points: 12,
    id: 1,
    location: "or",
  },
  {
    name: "Broken mail boxes",
    description: "Stop people from breaking boxes, and fix the ones broken",
    points: 5,
    id: 2,
    location: "or",
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
