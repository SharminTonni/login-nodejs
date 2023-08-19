import React, { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const [text, setText] = useState("");
  const { id } = useParams();
  const singlePost = useLoaderData();
  const navigate = useNavigate();

  const handlePost = (e) => {
    e.preventDefault();

    fetch(`https://login-server-six.vercel.app/post/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ text }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Your post has been edited successfully");
          navigate("/allposts");
        }
      });
  };
  return (
    <div>
      <h4>Edit your post</h4>
      <form onSubmit={handlePost}>
        <textarea
          defaultValue={singlePost.text}
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

export default EditPost;
