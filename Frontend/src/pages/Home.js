import React from 'react';
import { Link } from 'react-router-dom';

// Define styles here
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f4f4f4', // Example background color
  },
  buttons: {
    margin: '20px 0',
  },
  button: {
    textDecoration: 'none',
    padding: '10px 20px',
    color: '#fff',
    backgroundColor: '#007bff',
    borderRadius: '5px',
    margin: '5px',
    fontSize: '16px',
  },
};

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to the Expense Tracker App</h1>
      <p>Track your income and expenses effortlessly.</p>
      
      <div style={styles.buttons}>
        <Link to="/login" style={styles.button}>
          Log In
        </Link>
        <Link to="/signup" style={styles.button}>
          Sign Up
        </Link>
      </div>

      <p>Already have an account? <Link to="/login">Log in here</Link></p>
    </div>
  );
};

export default Home;