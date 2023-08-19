import React, { useState } from "react";
import { FaPen, FaPenAlt, FaRegThumbsUp, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Posts = ({ post, posts, setPosts, index }) => {
  const [likes, setLikes] = useState(post.likes);
  const [comment, setComment] = useState([]);
  const handleLike = () => {
    fetch(`https://login-server-six.vercel.app/post/${post._id}/like`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("You liked the post");
          setLikes(likes + 1);
          const remaining = posts.filter((p) => p._id !== post._id);
          const updated = posts.find((p) => p._id === post._id);
          const newPost = [updated, ...remaining];
          setPosts(newPost);
        }
      });
    console.log("clicked");
  };

  const handleDelete = (post) => {
    fetch(`https://login-server-six.vercel.app/post/${post._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          console.log(data);
          alert("your post has been deleted");
          const remaining = posts.filter((p) => p._id !== post._id);
          setPosts(remaining);
        }
      });
  };

  const handleComment = (e) => {
    e.preventDefault();

    fetch(`https://login-server-six.vercel.app/post/${post._id}/comment`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ comment }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("comments have been added");
          const remaining = posts.filter((p) => p._id !== post._id);
          const updatedPost = posts.find((p) => p._id === post._id);
          post.comments.push(comment);
          const newPost = [updatedPost, ...remaining];
          setPosts(newPost);
          e.target.reset();
        }
      });
  };
  return (
    <div>
      <p>Post num: {index + 1}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <h4>{post.text}</h4>

        <div>
          <button onClick={() => handleDelete(post)}>
            <FaTrashAlt></FaTrashAlt>
          </button>
          <Link to={`/editpost/${post._id}`}>
            <button>
              <FaPen></FaPen>
            </button>
          </Link>
        </div>
      </div>

      <div style={{ display: "flex", gap: "3px" }}>
        <div style={{ position: "relative" }}>
          <button onClick={handleLike}>
            <FaRegThumbsUp></FaRegThumbsUp>
          </button>
          <p
            style={{
              position: "absolute",
              top: "0",
              right: "2px",
              backgroundColor: "red",
              borderRadius: "10px",
            }}
          >
            <small>{likes}</small>
          </p>
        </div>
        <form onSubmit={handleComment} style={{ display: "flex" }}>
          <textarea
            type="text"
            name="comment"
            id=""
            onChange={(e) => setComment(e.target.value)}
          />
          <input type="submit" value="Comment" />
        </form>
        <p>
          <small>{post.comments.length}</small>
          <Link to={`/comments/${post._id}`}>
            <small>All Comments</small>
          </Link>
        </p>
      </div>
      <hr />
    </div>
  );
};

export default Posts;
