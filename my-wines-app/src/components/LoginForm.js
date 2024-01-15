// LoginForm.js
import React, { useState } from 'react';
import { useHistory } from 'react-router';

const LoginForm = ({ isAuthenticated, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // Implement your authentication logic here
    // For simplicity, let's consider any non-empty email/password as a successful login
    onLogin();
  };

  const handleRegister = () => {
    // Implement your registration logic here
    // For simplicity, let's just log the entered credentials
    console.log('Register - Email:', email);
    console.log('Register - Password:', password);

    // After successfully registering, navigate back to the login page
    history.push('/login');
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
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default LoginForm;
