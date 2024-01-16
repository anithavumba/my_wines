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
    console.log('Logging in...');

    // Check if email and password are not empty (you might want more robust validation)
    if (email.trim() !== '' && password.trim() !== '') {
      // Hardcoded valid credentials for this example
      const validEmail = 'user@example.com';
      const validPassword = 'password';

      // Check if entered credentials match the valid ones
      if (email === validEmail && password === validPassword) {
        onLogin(); // Update authentication state

        // Redirect the user to the list of wines page after successful login
        history.push('/list-wines');
      } else {
        console.error('Invalid email or password.');
      }
    } else {
      console.error('Email and password cannot be empty.');
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
