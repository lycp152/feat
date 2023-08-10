import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ログイン状態を管理する状態変数

  const handleLogout = () => {
    // ログアウト処理を行う際に呼ばれる関数
    // ログアウト処理が完了したら setIsLoggedIn(false) を実行してログアウト状態にする
  };

  return (
    <header className="app-header">
      <Link to="/" className="header-logo">
        <h1>FEAT.</h1>
      </Link>
      <div className="header-links">
        {/* ログインしていない場合に表示 */}
        {!isLoggedIn && (
          <>
            <Link to="/login">ログイン</Link>
            <Link to="/signup">サインアップ</Link>
          </>
        )}
        {/* ログインしている場合に表示 */}
        {isLoggedIn && (
          <button onClick={handleLogout}>ログアウト</button>
        )}
      </div>
    </header>
  );
};

export default Header;
