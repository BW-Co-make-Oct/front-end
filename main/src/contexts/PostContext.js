import React, { createContext, useReducer, useEffect } from "react";
import reducers from "../Reducers/reducers";
import { getData } from "../Actions";

export const PostContext = createContext();

const PostContextProvider = (props) => {
  const [post, dispatch] = useReducer(reducers, []);

  return (
    <PostContext.Provider value={{ post, dispatch }}>
      {props.children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
