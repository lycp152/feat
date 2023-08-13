import React from "react";
import "./Notifications.css";

const mockNotifications = [
  {
    id: 1,
    username: "にゃんこ",
    message: "さんがあなたの投稿をいいねしました",
    timestamp: "1分前",
    read: false,
  },
  {
    id: 2,
    username: "ほげほげ",
    message: "さんにフォローされました",
    timestamp: "5分前",
    read: true,
  },
  {
    id: 3,
    username: "ほげほげ",
    message: "さんがあなたの投稿をリポストしました",
    timestamp: "10分前",
    read: true,
  },
  // 他の通知データも追加
];

const Notifications = () => {
  return (
    <div className="notifications-container">
      <h2>通知</h2>
      <ul className="notifications-list">
        {mockNotifications.map((notification) => (
          <li
            key={notification.id}
            className={`notification ${notification.read ? "read" : "unread"}`}
          >
            <div className="notification-content">
              <span className="username">{notification.username}</span>
              <span className="message">{notification.message}</span>
              <span className="timestamp">{notification.timestamp}</span>
            </div>
            {!notification.read && <span className="unread-dot" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
