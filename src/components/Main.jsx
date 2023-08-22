import React from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };
  const token = localStorage.getItem("access_token");
  return (
    <div>
      <Link style={{ marginRight: "10px" }} to="/signup">
        SingUp
      </Link>
      <Link to="/login">Login</Link>
      <button onClick={handleLogout}>Logout</button>
      {token && (
        <div>
          <Link
            style={{ marginLeft: "15px", marginRight: "5px" }}
            to="/addpost"
          >
            Add Post
          </Link>
          <Link style={{ marginLeft: "10px" }} to="/allposts">
            All Posts
          </Link>
        </div>
      )}
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
