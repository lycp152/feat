import React from "react";

const MockPosts = ({ posts }) => {
  return posts.map((post) => (
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
  ));
};

export default MockPosts;
