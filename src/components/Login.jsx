import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
    fetch("https://login-server-six.vercel.app/login", {
      method: "POST",

      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          navigate("/addpost");
        } else {
          alert(data.status);
        }
        e.target.reset();
      });
  }
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <h3>Log In</h3>

          <div>
            <label style={{ marginRight: "5px" }}>Email address: </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
            />
          </div>

          <div>
            <label style={{ marginRight: "5px" }}>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
            />
          </div>

          <p>
            <Link to="/forgot">Forgot Password</Link>
          </p>

          <div>
            <button
              style={{
                marginTop: "5px",
                backgroundColor: "lightblue",
                hover: true,
              }}
              type="submit"
              className="btn btn-primary"
            >
              Log in
            </button>
          </div>
          <p>
            Don't have an account? <Link to="/signup">Singup</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
