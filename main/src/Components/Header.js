import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="mainHead">
      <Link to="/protected" className="title">
        Co-Make
      </Link>
      <div>
        <Link to="/login" className="login">
          Login
        </Link>
        <Link to="/add-post" className="login">
          Add Post
        </Link>
      </div>
    </header>
  );
}

export default Header;
