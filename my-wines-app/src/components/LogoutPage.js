// LogoutPage.js

import React from 'react';
import { useHistory } from 'react-router';

const LogoutPage = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Add logic to clear authentication state or perform logout actions
    // For now, let's just navigate to the Login page
    history.push('/login');
  };

  return (
    <div>
      <h2>Logout Page</h2>
      <p>Are you sure you want to logout?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutPage;
