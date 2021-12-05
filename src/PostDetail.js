import { useParams, useHistory } from "react-router";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { API_GET_POST, API_GET_COMMENT } from "./constant";
import AddMessage from "./AddMessage";
import Message from "./Message";

const PostDetail = () => {
  const { id } = useParams();
  const url = API_GET_POST + id;
  const urlMsg = API_GET_COMMENT + id;
  const [data, setData] = useState([]);
  const history = useHistory();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);
  function handleClick() {
    fetch(url, {
      method: "DELETE",
    });
    fetch(urlMsg, {
      method: "DELETE",
    }).then(() => history.push("/"));
  }

  const [messages, setMessages] = useState([]);
  const submittingStatus = useRef(false);
  async function fetchData(setMsg) {
    const res = await fetch(urlMsg);
    const { data } = await res.json();
    setMsg(data);
  }
  function fetchSetData(data) {
    fetch(urlMsg, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ data }),
    });
  }
  useEffect(() => {
    if (!submittingStatus.current) {
      return;
    }
    fetchSetData(messages)
    submittingStatus.current = false;
  }, [messages]);

  useEffect(() => {
    fetchData(setMessages);
  }, []);


  return (
    <div>
      <header>{data.title}</header>
      <Link to={`/edit/${id}`}>
        <button className="edit-btn">Edit</button>
      </Link>
      <button className="delete-btn" onClick={handleClick}>
        Delete
      </button>
      <p className="post-detail">{data.content}</p>

      <Message messages={messages} />
      <AddMessage add={setMessages} submittingStatus={submittingStatus} />
    </div>
  );
};

export default PostDetail;
