import { useState } from "react";
import { v4 } from "uuid";
import { API_GET_COMMENT, API_GET_POST } from "./constant";
import { useHistory } from "react-router-dom";
import moment from "moment";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();
  const date = moment().format("YYYY/MM/DD");
  function titleChange(e) {
    setTitle(e.target.value);
  }
  function contentChange(e) {
    setContent(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const id = v4();
    const post = { title, content, date, id };
    fetch(API_GET_POST, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    const data = [];
    fetch(API_GET_COMMENT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, data }),
    });
    history.push("/");
  }

  return (
    <div className="addPost">
      <header>Add Post</header>
      <form onSubmit={handleSubmit}>
        <p>Title</p>
        <input type="text" value={title} onChange={titleChange} />
        <p>Content</p>
        <textarea value={content} onChange={contentChange} />
        <p><button className="send-btn">SEND</button></p>
      </form>
    </div>
  );
};

export default AddPost;
