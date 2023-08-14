import React from "react";
import FeedLayout from "../feedLayout/FeedLayout";

const mockPostsData = [
  {
    id: 1,
    username: "FEATさん",
    userId: "@featsan",
    timestamp: "2023-07-05 10:00",
    content: "ハッカソンで最優秀賞を取れました！頑張った！ #宣言・成果",
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
      "サービスをブラッシュアップするため、100人にヒアリングを行います💪 #宣言・成果",
    mediaUrl: "", // メディアのURLを追加
    comments: 8,
    repost: 10,
    likes: 20,
  },
  // ここに好きなデータを追加できます
];

const Results = () => {
  return <FeedLayout posts={mockPostsData} />;
};

export default Results;
