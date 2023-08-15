import React, { useState } from "react";
import ChatProfile from "./ChatProfile";
import ChatUserList from "./ChatUserList";
import Chat from "./Chat";
import "./Messages.css";

const Messages = () => {
  const [activeUser, setActiveUser] = useState(null); // 選択されたユーザーのIDを保持

  const users = [
    { id: 1, name: "ユーザー1" },
    { id: 2, name: "ユーザー2" },
    // 他のユーザーもここに追加
  ];

  // ユーザーがクリックされたときの処理
  const handleUserClick = (userId) => {
    setActiveUser(userId);
  };

  return (
    <div className="messages-container">
      <ChatUserList
        users={users}
        activeUser={activeUser}
        onUserClick={handleUserClick}
      />
      <div className="content-container">
        <ChatProfile />
        <Chat activeUser={activeUser} />
      </div>
    </div>
  );
};

export default Messages;
