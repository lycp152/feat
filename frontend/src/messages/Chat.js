import React, { useState } from "react";
import "./Chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: "こんにちは！", sender: "user1", read: true },
    { text: "よろしくお願いします！", sender: "user2", read: false },
    // 他のメッセージもここに追加
  ]);

  const sendMessage = (text) => {
    const newMessage = { text, sender: "user1", read: true };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="message-container">
      <div className="message-box">
        {messages.map((message, index) => (
          <React.Fragment key={index}>
            {index !== 0 && messages[index - 1].read !== message.read && (
              <div className="message-divider"></div>
            )}
            <div
              className={`message ${
                message.sender === "user1" ? "sent" : "received"
              } ${message.read ? "read" : "unread"}`}
            >
              {message.text}
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="input-box">
        <input type="text" placeholder="メッセージを入力してください" />
        <button
          onClick={() => sendMessage("送信されたメッセージ")}
          className="sendButton"
        >
          送信
        </button>
      </div>
    </div>
  );
};

export default Chat;
