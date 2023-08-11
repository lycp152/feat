import React from "react";
import "./MockPosts.css";
import MockPosts from "./MockPosts";

const mockPostsData = [
  {
    id: 1,
    username: "FEATさん",
    userId: "@featsan",
    timestamp: "2023-07-05 10:00",
    content:
      "ブロックチェーンで労働問題を解決するためのプロダクトを開発したいです。メンバーを2~4人募集しています。",
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
    content:
      "空き家を活用し、コワーキングスペースを運営するプロジェクトを行っています！少しでも興味ある方はご連絡ください！",
    mediaUrl: "", // メディアのURLを追加
    comments: 8,
    repost: 10,
    likes: 20,
  },
  // ここに好きなデータを追加できます
];

const Projects = () => {
  return (
    <div className="page-contentFeed">
      <MockPosts posts={mockPostsData} />
    </div>
  );
};

export default Projects;
