import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = ({ auth }) => {
  console.log(auth);
  useEffect(() => {
    console.log("rendered");
  }, [auth.isAuthenticated()]);
  return (
    <div>
      <h1> Home </h1>
      {auth.isAuthenticated() ? (
        <Link to="/profile">Profile</Link>
      ) : (
        <button onClick={() => auth.login()}>Login</button>
      )}
    </div>
  );
};

export default Home;
