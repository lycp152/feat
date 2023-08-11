import React from "react";

const UserProfile = ({ userProfile }) => {
  return (
    <div className="profile-info">
      <img
        className="profile-picture"
        src={userProfile.profilePicture}
        alt="Profile"
      />
      <div className="username">{userProfile.username}</div>
      <div className="user-id">{userProfile.userId}</div>
      <div className="follow-info">
        <div className="follow-number">フォロー中 {userProfile.following}</div>
        <div className="follower-number">
          フォロワー {userProfile.followers}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
