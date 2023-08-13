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
      "〇〇ハッカソンに参加しました！メンターの方のサポートが手厚く、初心者でもしっかり開発でき勉強になりました！",
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
    content: "××主催の交流会に行ってきた！いろんな人とお話しできて楽しかった🥳",
    mediaUrl: "", // メディアのURLを追加
    comments: 8,
    repost: 10,
    likes: 20,
  },
  // ここに好きなデータを追加できます
];

const EventReports = () => {
  return (
    <div className="page-contentFeed">
      <MockPosts posts={mockPostsData} />
    </div>
  );
};

export default EventReports;
