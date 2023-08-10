import React from "react";

const UserProfile = () => {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="profile-info">
        <img
          src="https://placekitten.com/150/150"
          alt="User Profile"
          className="profile-image"
        />
        <div className="user-details">
          <h3>John Doe</h3>
          <p>Email: johndoe@example.com</p>
          <p>Location: New York, USA</p>
          {/* Add more user details here */}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
