import React from "react";
import "./MockPosts.css";
import MockPosts from "./MockPosts";

const mockPostsData = [
  {
    id: 1,
    username: "FEATさん",
    userId: "@featsan",
    timestamp: "2023-07-05 10:00",
    content: "最初の投稿！",
    mediaUrl: "", // メディアのURLを追加
    comments: 5,
    repost: 7,
    likes: 10,
  },
  {
    id: 2,
    username: "フィーちゃん",
    userId: "@feachan",
    timestamp: "2023-07-05 11:30",
    content: "初めまして！",
    mediaUrl: "", // メディアのURLを追加
    comments: 8,
    repost: 10,
    likes: 20,
  },
  // ここに好きなデータを追加できます
];

const HomeFeed = () => {
  return (
    <div className="page-contentFeed">
      <MockPosts posts={mockPostsData} />
    </div>
  );
};

export default HomeFeed;
