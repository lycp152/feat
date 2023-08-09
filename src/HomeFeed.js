import React from "react";
import "./HomeFeed.css"; // 必要に応じてスタイリングを追加

const mockPosts = [
  {
    id: 1,
    username: "user1",
    timestamp: "2023-07-05 10:00:00",
    content: "This is the first post.",
    mediaUrl: "", // メディアのURLを追加
    likes: 10,
    comments: 5,
  },
  {
    id: 2,
    username: "user2",
    timestamp: "2023-07-05 11:30:00",
    content: "Another post here.",
    mediaUrl: "", // メディアのURLを追加
    likes: 20,
    comments: 8,
  },
  // 他の投稿も同様に追加
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
            <button className="like-button">いいね ({post.likes})</button>
            <button className="comment-button">コメント ({post.comments})</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeFeed;

