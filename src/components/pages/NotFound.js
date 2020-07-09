import React from "react";
import "./notfound.css";

function NotFound() {
  return (
    <div className="parent-notfound">
      <h1>
        <span className="child-notfound">404</span> Page Not Found
      </h1>
      <p>Sorry, this page does not exist!</p>
    </div>
  );
}

export default NotFound;
