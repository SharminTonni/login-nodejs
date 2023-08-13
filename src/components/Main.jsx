import React from "react";
import { Link, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Link style={{ marginRight: "10px" }} to="/signup">
        SingUp
      </Link>
      <Link to="/login">Login</Link>
      <Link style={{ marginLeft: "10px" }} to="/users">
        All Users
      </Link>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
