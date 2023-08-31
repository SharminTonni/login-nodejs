import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Forgot = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
    fetch("https://login-server-six.vercel.app/reset", {
      method: "POST",

      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Email sent successfully") {
          // navigate("/reset");
          alert("check your email");
        } else {
          alert(data.message);
        }

        console.log("userRegister");
      });
  };
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Forgot Password?</h3>

          <div className="mb-3">
            <label style={{ marginRight: "5px" }}>Email:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              name="email"
            />
          </div>

          <div className="d-grid">
            {" "}
            <button
              type="submit"
              style={{
                marginTop: "5px",
                backgroundColor: "lightblue",
                hover: true,
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
