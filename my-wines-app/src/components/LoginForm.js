// src/components/LoginForm.js
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const LoginForm = ({ isAuthenticated, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  const handleLogin = () => {
    // Implement your authentication logic here
    // For simplicity, let's consider any non-empty email/password as a successful login
    if (email.trim() !== '' && password.trim() !== '') {
      onLogin();
      history.replace(from);
    }
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
