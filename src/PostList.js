import { Link } from "react-router-dom";

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.slice(0).reverse().map((post) => ( 
        <div className="post-list" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <h1>{post.title}</h1>
            <h2>{post.content}</h2>
            <p>
              Post by Daphne on {post.date}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;