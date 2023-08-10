import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <Link to="/home"># 🏠 : ホーム</Link>
        <Link to="/explore"># 🧭 : 探索</Link>
        <Link to="/notifications"># 🔔 : 通知</Link>
        <Link to="/messages"># ✉️ : メッセージ</Link>
        <Link to="/profile"># 👤 : プロフィール</Link>
          <div div className="spacer"></div> {/* 空白 */}
        <Link to="/tsumiage"># 📚 : 今日の積み上げ</Link>
        <Link to="/results"># 🏆 : 宣言・成果</Link>
        <Link to="/chat"># 💬 : つぶやき・雑談</Link>
          <div className="spacer"></div> {/* 空白 */}
        <Link to="/events"># 🚀 : イベント共有・告知</Link>
        <Link to="/eventreports"># 📝 : イベントレポート</Link>
          <div className="spacer"></div> {/* 空白 */}
        <Link to="/projects"># 🙋 : プロジェクト募集</Link>
        <Link to="/surveys"># 👀 : 調査検証・ヒアリング</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
