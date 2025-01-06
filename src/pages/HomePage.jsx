import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Document Generator</h1>
      <Link to="/select">Start</Link>
    </div>
  );
};

export default HomePage;
