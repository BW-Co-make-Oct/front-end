import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { PostContext } from "../contexts/PostContext";
import { postIssue } from "../Actions";

const blankData = {
  name: "",
  location: "",
  description: "",
};

function EditIssueForm(props) {
  const { post, dispatch } = useContext(PostContext);

  const [postData, setPostData] = useState(blankData);
  const history = useHistory();

  const change = (e) => {
    const { name, value, checked, type } = e.target;
    const toChange = type === "checkbox" ? checked : value;
    setPostData({ ...postData, [name]: toChange });
  };
  const submit = (e) => {
    e.preventDefault();
    const newPost = {
      title: postData.name,
      location: postData.location,
      description: postData.description,
    };

    postIssue(dispatch, newPost);
    history.push("/protected");
  };

  return (
    <>
      <div className="eventForm">
        <div className="divH2">
          <h2>Issue Form</h2>
        </div>
        <div className="eventFBox">
          <form onSubmit={submit}>
            <div className="eventItem">
              <label>Post Name</label>
              <input
                type="text"
                name="name"
                value={postData.name}
                placeholder={postData.name}
                onChange={change}
              />
            </div>

            <div className="eventItem">
              <label>Location</label>
              <input
                type="text"
                name="location"
                value={postData.location}
                placeholder={postData.location}
                onChange={change}
              />
            </div>

            <div className="eventItem">
              <label>Description</label>
              <input
                type="text"
                name="description"
                value={postData.description}
                placeholder={postData.description}
                onChange={change}
              />
            </div>

            <div className="eventItemSub">
              <button id="subutton">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditIssueForm;
