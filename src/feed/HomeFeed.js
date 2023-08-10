import React from "react";
import "./Feed.css"; // 必要に応じてスタイリングを追加

const mockPosts = [
  {
    id: 2,
    username: "フィーちゃん",
    timestamp: "2023-07-05 11:30",
    content: "初めまして！",
    mediaUrl: "", // メディアのURLを追加
    comments: 8,
    repost: 10,
    likes: 20,
  },
  {
    id: 1,
    username: "FEATさん",
    timestamp: "2023-07-05 10:00",
    content: "最初の投稿！",
    mediaUrl: "", // メディアのURLを追加
    comments: 5,
    repost: 7,
    likes: 10,
  },
];

const HomeFeed = () => {
  return (
    <div className="home-feed">
      {mockPosts.map((post) => (
        <div key={post.id} className="post-card">
          <div className="post-header">
            <span className="username">{post.username}</span>
            <span className="timestamp">{post.timestamp}</span>
          </div>
          <div className="post-content">{post.content}</div>
          {post.mediaUrl && <img src={post.mediaUrl} alt="Post Media" />} {/* メディアの表示 */}
          <div className="post-actions">
            <button className="comment-button">💬 {post.comments}</button>
            <button className="repost-button">🔁 {post.repost}</button>
            <button className="like-button">❤️ {post.likes}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeFeed;
