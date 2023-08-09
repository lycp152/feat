import React from "react";
import "./Auth.css";

const Signup = () => {
  return (
    <div className="auth-container">
      <h2>サインアップ</h2>
      <form className="auth-form">
        <label htmlFor="username">ユーザー名</label>
        <input type="text" id="username" />

        <label htmlFor="email">メールアドレス</label>
        <input type="email" id="email" />

        <label htmlFor="password">パスワード</label>
        <input type="password" id="password" />

        <button type="submit">サインアップ</button>
      </form>
    </div>
  );
};

export default Signup;
