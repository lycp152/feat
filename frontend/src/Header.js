import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ isLogin, setIsLoggedIn }) => {
  const handleLogout = () => {
    // ログアウト処理を行う際に呼ばれる関数
    // ログアウト処理が完了したら setIsLoggedIn(false) を実行してログアウト状態にする
    setIsLoggedIn(false);
  };

  return (
    <header className="app-header">
      <Link to="/" className="header-logo">
        <h1>FEAT.</h1>
      </Link>
      <div className="header-links">
        {/* ログインしていない場合に表示 */}
        {!isLogin && (
          <>
            <Link to="/login">ログイン</Link>
            <Link to="/signup">サインアップ</Link>
          </>
        )}
        {/* ログインしている場合に表示 */}
        {isLogin && (
          <>
            <button onClick={handleLogout} Link to="/">
              ログアウト
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
