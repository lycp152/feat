import React from "react";
import "./MockPosts.css";
import MockPosts from "./MockPosts";

const mockPostsData = [
  // ここに好きなデータを追加できます
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

const Surveys = () => {
  return (
    <div className="page-contentFeed">
      <MockPosts posts={mockPostsData} />
    </div>
  );
};

export default Surveys;
