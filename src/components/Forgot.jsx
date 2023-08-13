import { useState } from "react";

const Forgot = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
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
        alert(data?.status);
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
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
