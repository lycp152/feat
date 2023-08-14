import React from "react";
import FeedLayout from "../feedLayout/FeedLayout";

const mockPostsData = [
  {
    id: 1,
    username: "FEATさん",
    userId: "@featsan",
    timestamp: "2023-07-05 10:00",
    content: "こちらのハッカソン、どなたか是非一緒に参加しませんか？",
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
    content: "サークル主催で交流会を行います！是非ご参加ください！",
    mediaUrl: "", // メディアのURLを追加
    comments: 8,
    repost: 10,
    likes: 20,
  },
  // ここに好きなデータを追加できます
];

const Events = () => {
  return <FeedLayout posts={mockPostsData} />;
};

export default Events;
