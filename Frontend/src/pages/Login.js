// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom'; // Use Link instead of <a> tag

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const credentials = { email, password };

//     try {
//       const response = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(credentials),
//       });

//       if (!response.ok) {
//         throw new Error('Login failed, please check your credentials');
//       }

//       // On success, navigate to the dashboard or home
//       navigate('/dashboard');
//     } catch (error) {
//       setErrorMessage(error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Login to Your Account</h2>
//       {errorMessage && <p>{errorMessage}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       <p>Don't have an account? <Link to="/signup">Sign Up</Link></p> {/* Use Link here */}
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const credentials = { email, password };

    try {
      const response = await fetch('http://localhost:5000/accounts/login', { // Updated endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        // need to save token first before navigating to dashboard
        setSuccess(true);
        // On success, navigate to the dashboard or home
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
