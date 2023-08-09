import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="app-header">
      <Link to="/" className="header-logo">
        <h1>FEAT.</h1>
      </Link>
      <div className="header-links">
        <Link to="/login">ログイン</Link>
        <Link to="/signup">サインアップ</Link>
      </div>
    </header>
  );
};

export default Header;
