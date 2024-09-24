

import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CurrentUser } from '../context/CurrentUser';  // Import the CurrentUser context

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(CurrentUser);  // Destructure setCurrentUser from the context

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const credentials = { email, password };

    try {
      const response = await fetch('http://localhost:5000/authentication', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;  // Assuming the response contains the token

        // Save the token in localStorage
        localStorage.setItem('token', token);

        // Fetch the user profile using the token
        const profileResponse = await fetch('http://localhost:5000/authentication/profile', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!profileResponse.ok) {
          throw new Error('Failed to fetch user profile');
        }

        const userProfile = await profileResponse.json();

        // Set the current user in the context
        setCurrentUser(userProfile);

        setSuccess(true);

        // Navigate to the dashboard after successful login
        navigate('/dashboard');
      } else {
        const errMsg = await response.json();
        setError(errMsg.error || 'Login failed, please check your credentials.');
      }
    } catch (error) {
      setError('An error occurred during login.');
    }
  };

  return (
    <div>
      <h2>Login to Your Account</h2>
      {error && <p className="error">{error}</p>}
      {success ? (
        <p className="success">Login successful! Redirecting...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
        </form>
      )}
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default Login;