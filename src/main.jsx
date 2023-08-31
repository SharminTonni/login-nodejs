import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import Forgot from "./components/Forgot.jsx";
import Main from "./components/Main.jsx";
import Users from "./components/Users.jsx";
import AddPost from "./components/AddPost";
import AllPosts from "./components/AllPosts.jsx";
import EditPost from "./components/EditPost.jsx";
import AllComments from "./components/AllComments.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "forgot",
        element: <Forgot></Forgot>,
      },

      {
        path: "users",
        element: <Users></Users>,
      },
      {
        path: "addpost",
        element: <AddPost></AddPost>,
      },
      {
        path: "allposts",
        element: <AllPosts></AllPosts>,
        // loader: () => fetch("https://login-server-six.vercel.app/allposts"),
      },
      {
        path: "editpost/:id",
        element: <EditPost></EditPost>,
        loader: ({ params }) =>
          fetch(`https://login-server-six.vercel.app/singlepost/${params.id}`),
      },
      {
        path: "comments/:id",
        element: <AllComments></AllComments>,
        loader: ({ params }) =>
          fetch(`https://login-server-six.vercel.app/singlepost/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
