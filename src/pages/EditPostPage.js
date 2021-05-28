/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { useHistory } from "react-router-dom";

function EditPostPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  let params = useParams();
  let history = useHistory();

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }
  async function editPosts() {
    let response = await fetch("http://localhost:8000/posts/" + params.postId, {
      method: "PUT",
      body: JSON.stringify({ title: title, content: description }),
      headers: {
        "content-type": "application/json",
      },
    });
    if (response.ok) {
      history.push("/home");
    }
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    editPosts();
    console.log("submit");
  }

  useEffect(() => {
    async function getPostById() {
      let response = await fetch(
        "http://localhost:8000/posts/" + params.postId
      );

      let data = await response.json();
      console.log(data);
      setTitle(data.data.title)
      setDescription(data.data.content)
    }
    getPostById();
  }, []);
  return (
    <div>
      <div className="postapp-header">
        <h1>Edit Post Page</h1>
      </div>
      <div className="add-post-container">
        <div className="add-post">
          <form onSubmit={handleFormSubmit}>
            <div>
              <div>
                <lable htmlFor="title">Title</lable>
              </div>
              <input
                type="text"
                id="title"
                className="title"
                onChange={
                  handleTitleChange
                }
                value={title}
              />
            </div>
            <div>
              <div>
                <lable htmlFor="description">Description</lable>
              </div>
              <textarea
                id="description"
                onChange={handleDescriptionChange}
                value={description}
              />
            </div>
            <div className="add-post-button">
              <Button type="submit">Save</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditPostPage;