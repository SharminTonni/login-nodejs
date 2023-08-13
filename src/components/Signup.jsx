import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const id = Math.ceil(Math.random() * 100);
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, password);
    fetch("https://login-server-six.vercel.app/signup", {
      method: "POST",
      crossDomain: true,
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.insertedId) {
          alert("Registration Successful");
        } else {
          alert("Something went wrong");
        }
      });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>

          <div>
            <label style={{ marginRight: "5px" }}>User name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label style={{ marginRight: "5px" }}>Email address:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label style={{ marginRight: "5px" }}>Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p>
            Already registered <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
