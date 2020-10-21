import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="mainHead">
      <Link to="/protected" className="title">
        Co-Make
      </Link>
      <Link to="/login" className="login">
        Login
      </Link>
    </header>
  );
}

export default Header;
