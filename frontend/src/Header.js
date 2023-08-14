import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({ isLogin, setIsLoggedIn }) => {
  const navigation = useNavigate();

  const handleLogout = () => {
    // ログアウト処理を行う際に呼ばれる関数
    // ログアウト処理が完了したら setIsLoggedIn(false) を実行してログアウト状態にする
    setIsLoggedIn(false);
    // ログアウト後に遷移する場所を指定する（例えば、トップページ）
    navigation("/");
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
            <button onClick={() => navigation("/login")}>ログイン</button>
            <button onClick={() => navigation("/signup")}>サインアップ</button>
          </>
        )}
        {/* ログインしている場合に表示 */}
        {isLogin && (
          <>
            <button onClick={handleLogout}>ログアウト</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
