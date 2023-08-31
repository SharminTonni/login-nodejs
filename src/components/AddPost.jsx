import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AddPost = () => {
  const [text, setText] = useState("");

  let navigate = useNavigate();

  const handlePost = (e) => {
    e.preventDefault();

    fetch("https://login-server-six.vercel.app/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ text }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Your post has been added successfully");
          navigate("/allposts");
        }
      });
  };
  return (
    <div>
      <h3>Add Your post Here</h3>
      <form onSubmit={handlePost}>
        <textarea
          onChange={(e) => setText(e.target.value)}
          cols="30"
          type="text"
          name="post"
          id=""
          placeholder="Add your Post"
          style={{ paddingLeft: "5px" }}
        />
        <br />
        <input type="submit" value="Post" />
      </form>
    </div>
  );
};

export default AddPost;
