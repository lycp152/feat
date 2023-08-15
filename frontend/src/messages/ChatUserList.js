import React from "react";
import "./ChatUserList.css";

const ChatUserList = ({ users, activeUser, onUserClick }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <div
          key={user.id}
          className={`user ${activeUser === user.id ? "active" : ""}`}
          onClick={() => onUserClick(user.id)}
        >
          {user.name}
        </div>
      ))}
    </div>
  );
};

export default ChatUserList;
