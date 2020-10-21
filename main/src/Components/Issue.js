import React, { useContext, useEffect } from "react";
import { PostContext } from "../contexts/PostContext";
import { useHistory } from "react-router-dom";
import { getData } from "../Actions";

function Issue(props) {
  const { post, dispatch } = useContext(PostContext);
  const history = useHistory();

  useEffect(() => {
    getData(dispatch);
  }, []);

  const upvote = (e) => {
    console.log("upvote", e);
  };
  const downvote = (e) => {
    console.log("downvote");
  };

  return (
    <div>
      {post["issue"] !== undefined ? (
        post["issue"].map((item) => {
          return (
            <div className="post" key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>

              <div className="buttons">
                <div className="votes">
                  <button
                    className="upvote"
                    onClick={() => {
                      upvote(item.id);
                    }}
                  >
                    Upvote
                  </button>
                  <h3>Votes: {item.vote_count}</h3>
                  <button
                    className="downvote"
                    onClick={() => {
                      downvote(item.id);
                    }}
                  >
                    Downvote
                  </button>
                </div>
                <div className="change">
                  <button
                    className="edit"
                    onClick={(e) => {
                      history.push(`/edit-post/${item.id}`);
                    }}
                  >
                    Edit
                  </button>
                  <button className="close">Close</button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}

export default Issue;
