import React from "react";
import "./Auth.css";

const Login = () => {
  return (
    <div className="auth-container">
      <h2>ログイン</h2>
      <form className="auth-form">
        <label htmlFor="username">ユーザー名</label>
        <input type="text" id="username" />

        <label htmlFor="password">パスワード</label>
        <input type="password" id="password" />

        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};

export default Login;
