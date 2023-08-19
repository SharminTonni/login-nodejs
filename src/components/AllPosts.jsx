import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

import { FaRegThumbsUp } from "react-icons/fa";
import Posts from "./Posts";

const AllPosts = () => {
  const allData = useLoaderData();
  const [posts, setPosts] = useState(allData);
  console.log(posts);

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
