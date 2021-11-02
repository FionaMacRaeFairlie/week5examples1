import React from "react";
 const UserProfile = ({ friends, displayName }) => (
  <div>
    <h1>{displayName}</h1>
    <ProfileSection label='Friends'>
      {friends.map(friend => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ProfileSection>
  </div>
)
const ProfileSection = ({ label, children }) => (
    <div>
      <h2>{label}</h2>
      {children}
    </div>
)
const Friend = ({ friend }) => (
  <div>
    <div>{friend.name}</div>
  </div>
)
export default UserProfile;