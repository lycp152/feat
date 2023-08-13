import React from "react";
import PostForm from "../postform/PostForm"; // PostForm コンポーネントをインポート

const MockPosts = ({ posts }) => {
  return (
    <div>
      {/* 投稿をマップ表示 */}
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <div className="post-header">
            <span className="username">{post.username}</span>
            <span className="userId">{post.userId}</span>
            <span className="timestamp">{post.timestamp}</span>
          </div>
          <div className="post-content">{post.content}</div>
          {post.mediaUrl && <img src={post.mediaUrl} alt="Post Media" />}
          <div className="post-actions">
            <button className="comment-button">💬 {post.comments}</button>
            <button className="repost-button">🔁 {post.repost}</button>
            <button className="like-button">❤️ {post.likes}</button>
          </div>
        </div>
      ))}
      <div className="post-card">
        <PostForm />
      </div>
    </div>
  );
};

export default MockPosts;
