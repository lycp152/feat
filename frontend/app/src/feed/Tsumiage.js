import React from "react";
import "./MockPosts.css";
import MockPosts from "./MockPosts";

const mockPostsData = [
  {
    id: 1,
    username: "FEATさん",
    userId: "@featsan",
    timestamp: "2023-07-05 10:00",
    content: "今日はアルゴリズムの勉強をしました！ #今日の積み上げ",
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
    content: "3人にアイデアのヒアリング #今日の積み上げ",
    mediaUrl: "", // メディアのURLを追加
    comments: 8,
    repost: 10,
    likes: 20,
  },
  // ここに好きなデータを追加できます
];

const Tsumiage = () => {
  return (
    <div className="page-contentFeed">
      <MockPosts posts={mockPostsData} />
    </div>
  );
};

export default Tsumiage;
