import { Link } from "react-router-dom";
// import useFetch from "./useFetch";
import { API_GET_POST } from "./constant";
import { useState, useEffect } from "react";
import PostList from "./PostList";

const Home = () => {
  // const { data: posts } = useFetch(API_GET_POST);
  const url = API_GET_POST;
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return (
    <div>
      <header>My Blog</header>
      <Link to="/add">
        <button className="add-btn">Add Post</button>
      </Link>
      <PostList posts={data} />
    </div>
  );
};

export default Home;
