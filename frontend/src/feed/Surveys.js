import React from "react";
import FeedLayout from "../feedLayout/FeedLayout";

const mockPostsData = [
  {
    id: 1,
    username: "FEATさん",
    userId: "@featsan",
    timestamp: "2023-07-05 10:00",
    content:
      "プロトタイプの使い心地を検証したいです。7月6日~7月20日までの間に、5人程どなたか協力お願いします🙇",
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
      "エンジニア学生の抱えている悩みについて、アンケートを行いたいです。8月中に100人以上回答を集めたいです！ご協力お願いします🥺",
    mediaUrl: "", // メディアのURLを追加
    comments: 8,
    repost: 10,
    likes: 20,
  },
  // ここに好きなデータを追加できます
];

const Surveys = () => {
  return <FeedLayout posts={mockPostsData} />;
};

export default Surveys;
