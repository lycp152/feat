import React from "react";
import "../feed/MockPosts.css";
import MockPosts from "../feed/MockPosts";

const mockPostsData = [
  {
    id: 1,
    username: "ねこねこ🐈",
    userId: "@nekoneko",
    timestamp: "2023-07-05 10:00",
    content: "最初の投稿！",
    mediaUrl: "", // メディアのURLを追加
    comments: 5,
    repost: 7,
    likes: 10,
  },
  {
    id: 2,
    username: "ねこねこ🐈",
    userId: "@nekoneko",
    timestamp: "2023-07-05 11:30",
    content: "初めまして！",
    mediaUrl: "", // メディアのURLを追加
    comments: 8,
    repost: 10,
    likes: 20,
  },
  // ここに好きなデータを追加できます
];

const UserPosts = () => {
  return (
    <div className="page-contentFeed">
      <MockPosts posts={mockPostsData} />
    </div>
  );
};

export default UserPosts;
