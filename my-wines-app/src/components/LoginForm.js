// LoginForm.js

import React, { useState } from 'react';
import { useHistory } from 'react-router';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // Add authentication logic here
    // For now, let's just log the entered credentials
    console.log('Email:', email);
    console.log('Password:', password);

    // If login is successful, navigate to List of Wines Page
    history.push('/list-wines');
  };

  return (
    <div>
      <h2>Login Page</h2>
      <label>Email: </label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>Password: </label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
