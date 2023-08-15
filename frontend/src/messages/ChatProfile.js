import React from "react";
import UserProfile from "../user/UserProfile";

const ChatProfile = () => {
  const userProfile = {
    profilePicture: "URL_TO_PROFILE_PICTURE",
    username: "わんわん",
    userId: "@wanwan",
    followers: 1000,
    following: 500,
  };

  return (
    <div className="profile-container">
      <UserProfile userProfile={userProfile} />
    </div>
  );
};

export default ChatProfile;
