import React from "react";
 const UserProfile = ({ friends, displayName }) => (
  <div>
    <h1>{displayName}</h1>
    <UserFriends friends={friends} />
  </div>
)
const UserFriends = ({ friends }) => (
  <div>
    <h2>Friends</h2>
    {friends.map(friend => (
      <Friend friend={friend} key={friend.id} />
    ))}
  </div>
)
const Friend = ({ friend }) => (
  <div>
    <div>{friend.name}</div>
  </div>
)
export default UserProfile;