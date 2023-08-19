import React from "react";
import { useLoaderData } from "react-router-dom";

const AllComments = () => {
  const singleData = useLoaderData();
  console.log(singleData);
  return (
    <div>
      All comments for: <h5>{singleData.text}</h5>
      {singleData.comments.map((comment, i) => (
        <li key={i}>{comment}</li>
      ))}
    </div>
  );
};

export default AllComments;
