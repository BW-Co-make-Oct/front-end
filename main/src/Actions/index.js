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
      dispatch({ type: ADD_POST, payload: res.data.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deletePost = (dispatch, incomData) => {
  axiosWithAuth()
    .delete(`/issue/${incomData.id}`, incomData)
    .then((res) => {
      getData(dispatch);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addUser = (dispatch, incomData) => {
  dispatch({ type: ADD_USER, payload: incomData });
};

const getPostInfo = (id) => {
  const info = axiosWithAuth()
    .get(`/issue/public/post/${id}`)
    .then((res) => {
      const temp = {
        ...res.data.Issue[0],
        vote_count: res.data.Issue[0].vote_count,
      };
      return temp;
    });
  return info;
};

export const upvotePost = (dispatch, incomData) => {
  getPostInfo(incomData).then((res) => {
    const newRes = {
      ...res,
      vote_count: res.vote_count === null ? 1 : res.vote_count + 1,
    };
    axiosWithAuth()
      .put(`/issue/${incomData}`, newRes)
      .then((res) => {
        getData(dispatch);
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
export const downvotePost = (dispatch, incomData) => {
  getPostInfo(incomData).then((res) => {
    const newRes = {
      ...res,
      vote_count: res.vote_count === null ? -1 : res.vote_count - 1,
    };
    axiosWithAuth()
      .put(`/issue/${incomData}`, newRes)
      .then((res) => {
        getData(dispatch);
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
