import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { PostContext } from "../contexts/PostContext";
import { getData } from "../Actions";

const blankData = {
  title: "",
  location: "",
  description: "",
};

function EditIssueForm(props) {
  const { post, dispatch } = useContext(PostContext);

  const [postData, setPostData] = useState(blankData);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .get(`/issue/public/post/${id}`)
      .then((res) => {
        setPostData({
          title: res.data.Issue[0].title,
          location: res.data.Issue[0].location,
          description: res.data.Issue[0].description,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const change = (e) => {
    const { name, value, checked, type } = e.target;
    const toChange = type === "checkbox" ? checked : value;
    setPostData({ ...postData, [name]: toChange });
  };
  const submit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/issue/${id}`, postData)
      .then((res) => {
        getData(dispatch);
      })
      .catch((err) => {
        console.log(err);
      });
    history.push("/protected");
  };

  return (
    <>
      <div className="eventForm">
        <div className="divH2">
          <h2>Edit Issue Form</h2>
        </div>
        <div className="eventFBox">
          <form onSubmit={submit}>
            <div className="eventItem">
              <label>Post Name</label>
              <input
                type="text"
                name="title"
                value={postData.title}
                placeholder={postData.title}
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
