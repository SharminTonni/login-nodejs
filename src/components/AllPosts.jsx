import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { FaRegThumbsUp } from "react-icons/fa";
import Posts from "./Posts";

const AllPosts = () => {
  // const allData = useLoaderData();
  const [posts, setPosts] = useState([]);
  console.log(posts);

  useEffect(() => {
    fetch("https://login-server-six.vercel.app/allposts", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post, index) => (
          <Posts
            post={post}
            key={post._id}
            posts={posts}
            setPosts={setPosts}
            index={index}
          ></Posts>
        ))}
      </ul>
    </div>
  );
};

export default AllPosts;
