import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { API_GET_POST } from "./constant";

const Edit = () => {
  const { id } = useParams();
  const url = API_GET_POST + id;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  let date = "";
  const history = useHistory();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => set(data));
  }, [url]);

  function set(post) {
    setTitle(post.title);
    setContent(post.content);
    date = post.date;
  }

  function titleChange(e) {
    setTitle(e.target.value);
  }
  function contentChange(e) {
    setContent(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const post = { title, content, date, id };
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    history.push("/posts/" + id);
  }

  return (
    <div className="addPost">
      <header>Edit Post</header>
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

export default Edit;
