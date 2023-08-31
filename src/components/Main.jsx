import React from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Link style={{ marginRight: "10px" }} to="/signup">
        SingUp
      </Link>
      <Link to="/login">Login</Link>

      <Link style={{ marginLeft: "15px", marginRight: "5px" }} to="/addpost">
        Add Post
      </Link>
      <Link style={{ marginLeft: "10px" }} to="/allposts">
        All Posts
      </Link>

      <Outlet></Outlet>
    </div>
  );
};

export default Main;
