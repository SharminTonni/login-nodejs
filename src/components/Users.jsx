import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://login-server-six.vercel.app//users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      {users.map((user) => (
        <p key={user._id}>{user?.name}</p>
      ))}
    </div>
  );
};

export default Users;
