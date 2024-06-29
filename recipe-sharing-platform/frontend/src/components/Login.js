import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      if (response.data.message === 'Login successful') {
        alert(response.data.message);
        navigate('/add-recipe');
      } else {
        // Handle invalid credentials
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div>
      <main>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
        <div>
          <p>
            Don't have an account? <a href="/register">Register</a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Login;
