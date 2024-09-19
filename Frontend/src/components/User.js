import React from 'react';

const User = ({ user }) => {
  if (!user) {
    return <p>No user data available</p>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <strong>Username:</strong> {user.username}
      </div>
      <div>
        <strong>Email:</strong> {user.email}
      </div>
      {/* Add more user-related details here if needed */}
    </div>
  );
};

export default User;

// this is the account 